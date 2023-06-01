'use client';

import { useCallback, useState } from "react";
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from "react-hook-form";

import Input from "@/app/components/inputs/Input";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //AXIOS REGISTER
        }
        
        if (variant === 'LOGIN') {
            //NEXTAUTH SIGNIN
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //NextAuth Social Sign In
    }

    return ( 
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-full">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        id="email" 
                        label="Email" 
                        register={register} />
                </form>
            </div>
        </div>
     );
}
 
export default AuthForm;