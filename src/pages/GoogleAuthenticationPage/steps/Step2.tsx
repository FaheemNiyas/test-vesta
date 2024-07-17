import { useState } from 'react';
import InputField from '@/components/atoms/InputField';

import { Controller, useForm } from 'react-hook-form';
import { StepProps } from '@/types';
import Button from '@/components/atoms/Button';

type IFormInput = {
  code: string;
};

const Step2 = ({ onNext }: StepProps) => {
  const { control, handleSubmit, formState } = useForm<IFormInput>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    console.log('onSubmit');
    setLoading(true);
  };

  return (
    <div className="flex items-center justify-center w-full p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-6 mt-6">
          <Controller
            name="code"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <InputField
                label="Authentication"
                type="text"
                placeholder="6-digit code"
                id="codeInput"
                inputProps={field}
                error={formState.errors.code ? 'Email address' : ''}
              />
            )}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-6">
          <Button
            text={loading ? 'Loading...' : 'Submit'}
            width="w-full"
            type="submit"
            bgColor={'bg-primary'}
            variant="custom"
          />
          <Button
            text={'I didn’t receive a message'}
            width="w-full"
            type="button"
            bgColor={'bg-[#0A0013]'}
            variant="custom"
          />
          <Button
            text={'Test2'}
            width="w-full"
            type="button"
            bgColor={'bg-[#0A0013]'}
            variant="custom"
            onClick={() => {
              onNext();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Step2;
