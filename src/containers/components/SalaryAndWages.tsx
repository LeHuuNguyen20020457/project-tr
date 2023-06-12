import React from 'react';
import { FieldValues, Path, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { InputSalary } from '../common/inputSalary';

interface TextInpuSalarytProps<T extends FieldValues> {
    control: Control<T>;
    errors?: FieldErrors<T>;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    watch: UseFormWatch<T>;
}

function SalaryAndWages<T extends FieldValues>({ control, errors, setValue, watch }: TextInpuSalarytProps<T>) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            <InputSalary
                name={'basic_salary' as Path<T>}
                control={control}
                label="Basic Salary"
                errors={errors}
                required
                setValue={setValue}
                watch={watch}
            ></InputSalary>
            <InputSalary
                name={'audit_salary' as Path<T>}
                control={control}
                label="Basic Salary (Audit)"
                errors={errors}
                required
                setValue={setValue}
                watch={watch}
            ></InputSalary>
            <InputSalary
                name={'safety_insurance' as Path<T>}
                control={control}
                label="Safety Insurance Amount"
                errors={errors}
                required
                setValue={setValue}
                watch={watch}
            ></InputSalary>
            <InputSalary
                name={'health_insurance' as Path<T>}
                control={control}
                label="Healthy Insurance Amount"
                errors={errors}
                setValue={setValue}
                watch={watch}
            ></InputSalary>
            <InputSalary
                name={'meal_allowance' as Path<T>}
                control={control}
                label="Meal Allowance"
                errors={errors}
                required
                setValue={setValue}
                watch={watch}
            ></InputSalary>
        </div>
    );
}

export default SalaryAndWages;
