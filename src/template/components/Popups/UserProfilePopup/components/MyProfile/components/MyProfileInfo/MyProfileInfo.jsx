import React from 'react';
import { useForm } from 'react-hook-form';

const MyProfileInfo = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('MyProfileInfo', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile__form">
      <span className="profile__label-text">Personal information </span>
      <div className="profile__form-block profile__form-block_personal">
        <div className="profile__form-row">
          <select {...register('gender')} className="profile__select">
            <option className="profile__option">Mr</option>
            <option className="profile__option">Mrs</option>
          </select>
        </div>
        <div className="profile__form-row">
          <label className="profile__label">
            <input {...register('name', { required: 'Field is required' })} type="text" className="profile__input" placeholder="name" />
          </label>
          {errors.name && <div className='formError'>{errors.name.message}</div>}
        </div>
      </div>
      <span className="profile__label-text">Date of birth</span>
      <div className="profile__form-block profile__form-block_date">
        <div className="profile__form-row profile__form-row_2">
          <select {...register('month')} className="profile__select profile__select_3">
            <option className="profile__option">August</option>
            <option className="profile__option">September</option>
          </select>
          <select {...register('day')} className="profile__select profile__select_3">
            <option className="profile__option">13</option>
            <option className="profile__option">14</option>
          </select>
          <select {...register('year')} className="profile__select profile__select_3">
            <option className="profile__option">1987</option>
            <option className="profile__option">1986</option>
          </select>
        </div>
      </div>
      <span className="profile__label-text">Country of residence</span>
      <div className="profile__form-block profile__form-block_city">
        <div className="profile__form-row">
          <select {...register('country')} className="profile__select">
            <option className="profile__option">Armenia</option>
          </select>
        </div>
      </div>
      <span className="profile__label-text">Address</span>
      <div className="profile__form-block profile__form-block_address">
        <div className="profile__form-row">
          <select {...register('address')} className="profile__select">
            <option className="profile__option">Komitas</option>
          </select>
        </div>
      </div>
      <span className="profile__label-text">Currency</span>
      <div className="profile__form-block profile__form-block_currency">
        <div className="profile__form-row">
          <select {...register('currency')} className="profile__select">
            <option className="profile__option">Euro</option>
          </select>
        </div>
      </div>
      <span className="profile__label-text">Document type</span>
      <div className="profile__form-block profile__form-block_type">
        <div className="profile__form-row">
          <select {...register('docType')} className="profile__select">
            <option className="profile__option">Passport</option>
          </select>
        </div>
        <div className="profile__form-row">
          <label className="profile__label">
            <input {...register('docNumber', { required: 'Field is required' })} type="text" className="profile__input" />
          </label>
          {errors.docNumber && <div className='formError'>{errors.docNumber.message}</div>}
        </div>
      </div>
      <div className="profile__form-block">
        <button type="submit" className="profile__form-btn profile__form-btn_changes">save changes</button>
      </div>
    </form>
  );
};

export default MyProfileInfo;