import React, { FC, useState } from 'react';
import cl from './Form.module.scss'
import { Input } from '@shared/ui/input';
import { Button } from '@shared/ui/button';

interface InputField {
    name: string;
    label: string;
    type: string;
}

interface IFormProps {
    fields: InputField[];
    buttonText: string;
    onSubmit: any;
    dataState: string[];
}

export const Form: FC<IFormProps> = ({ dataState, fields, buttonText, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={cl['form']}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <Input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            ))}
            <Button type="submit" onClick={handleSubmit}>{buttonText}</Button>
        </form>
    );
};
