'use client';
import React, { useState } from 'react'
import { Button } from '../components/Button';
import Modal from './Modal';
import Input from './Input';
import { useForm } from 'react-hook-form';
import { Select } from './Select';
import Image from 'next/image';
import { createProduct } from '../actions';
import { Loading } from './Loading';

type Inputs = {
  category: string;
  description: string;
  name: string;
  price: string;
  productImg: File,
  productUrl: string
}


export const ProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue
  } = useForm<Inputs>()

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false)
  };

  const removeImageInput = () => {
    setValue('productImg', null)
  }

  const onSubmit = async ({
    category, description, name, price, productImg, productUrl
  }: Inputs) => {

    setIsSubmitting(true)

    const newProduct = {
      category,
      description,
      name,
      price,
      productImg,
      productUrl,
    }

    // await createProduct(newProduct)
    // setIsSubmitting(false)
    // handleCloseModal()
  }

  let imageFiles: File[] = watch('productImg')
  let ImageFile = imageFiles && imageFiles.length > 0 && URL.createObjectURL(imageFiles[0])



  return (
    <div>
      <Button onClick={handleOpenModal}>
        New Product
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <h1 className=' text-2xl font-bold  text-center mb-4'>Create new product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input
            label='Name'
            id='name'
            register={register}
          />



          <Input
            label='Price'
            id='price'
            register={register}
          />

          <Select
            label='Category'
            id='category'
            register={register}
            options={[
              'Cozinha',
              'Geral',
              'Quarto',
              'Sala',
              "Banheiro"
            ]}
          />

          <Input
            label='Description'
            id='description'
            isTextArea
            register={register}
          />

          <Input
            label='Product URL'
            id='productUrl'
            register={register}
          />

          <Input
            label='Product Image'
            id='productImg'
            type='file'
            multiple={false}
            accept='.jpg,.jpeg,.png'
            register={register}
          />

          {imageFiles && imageFiles.length > 0 &&

            <div className="relative w-1/3 h-32 mb-2">
              <Image id="previewImage" src={
                ImageFile} alt="preview image" fill className='object-contain' />
              <div onClick={
                removeImageInput} className='absolute -top-4 -right-1 text-red-600 hover:cursor-pointer'>x</div>
            </div>
          }

          <div className='flex flex-row flex-grow-1 items-center justify-end'>
            <Button type="submit" disabled={isSubmitting}>
              {!isSubmitting ? "Create Product" :
                '...submitting'}
            </Button>
            <Button variant='secondary' onClick={handleCloseModal} >Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
} 
