"use client";

import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import Heading from "../Heading";
import { catagories } from "../navbar/Catagories";
import CatagoryInput from "../inputs/CatagoryInput";
import CountrySelect from "../inputs/CountrySelect";

enum STEPS {
  CATAGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  // Form validation for registering Houses
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      catagory: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  // function to watch the catagory input
  const catagory = watch("catagory");

  // set Custom value triggers page re render not like setValue from
  // useForm hook which doesn't

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  const [step, setStep] = useState(STEPS.CATAGORY);

  // Navigate to Back to a step
  const onBack = () => {
    setStep((value) => value - 1);
  };

  // Navigate to next step
  const onNext = () => {
    setStep((value) => value + 1);
  };

  // used to render Buttons that display the next section primary action
  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  // used to render Buttons that display the back section secondary item

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATAGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describe your place"
        subtitle="Pick Catagory"
      />

      <div
        className="grid 
        max-h-[50vh] 
        grid-cols-1 
        gap-3 
        overflow-y-auto 
        md:grid-cols-2"
      >
        {/*Mapping the catagories inside the first item */}
        {catagories.map((item) => (
          <div key={item.label}>
            <CatagoryInput
              onClick={(catagory) => setCustomValue("catagory", catagory)}
              selected={catagory === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  // Rendering Step 2 Location Menu

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located"
          subtitle="Help tenants find you"
        />

        <CountrySelect />
      </div>
    );
  }

  return (
    <Modal
      title="Register your House"
      body={bodyContent}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATAGORY ? undefined : onBack}
    />
  );
};

export default RentModal;
