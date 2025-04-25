import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormField } from '../Components/Input';

interface FormValues {
  username: string;
  email: string;
  phone: string;
  address: string;
}

const SimpleHookFormExample: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      address: ''
    }
  });
  
  const onSubmit = methods.handleSubmit((data) => {
    console.log('폼 제출 데이터:', data);
  });
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <FormField
          name="username"
          label="이름"
          placeholder="이름을 입력하세요"
          rules={{ required: '이름은 필수 입력 항목입니다' }}
        />
        
        <FormField
          name="email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력하세요"
          rules={{
            required: '이메일은 필수 입력 항목입니다',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '유효한 이메일 형식이 아닙니다'
            }
          }}
        />
        
        <FormField
          name="phone"
          label="전화번호"
          type="number"
          placeholder="전화번호를 입력하세요"
          rules={{ 
            required: '전화번호는 필수 입력 항목입니다' 
          }}
        />
        
        <FormField
          name="address"
          label="주소"
          placeholder="주소를 입력하세요"
        />
        
        <button type="submit">제출</button>
      </form>
    </FormProvider>
  );
};

export default SimpleHookFormExample; 