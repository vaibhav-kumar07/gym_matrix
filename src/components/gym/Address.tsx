// components/AddressForm.js

import { Label } from "../common/Label";
import { Input } from "../ui/input";
import { MapPin } from "lucide-react";
import React from "react";

const AddressForm = ({ register, errors }) => {
  return (
    <div className="space-y-2 grid grid-cols-2 gap-3">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <MapPin className="text-gray-600" /> Address
      </h3>
      <div>
        <Input {...register("address.street")} placeholder="Street" />
        {errors?.address?.street && (
          <Label size="xs" className="text-red-500 pl-1.5">
            {errors.address.street.message}
          </Label>
        )}
      </div>
      <div>
        <Input {...register("address.city")} placeholder="City" />
        {errors?.address?.city && (
          <Label size="xs" className="text-red-500 pl-1.5">
            {errors.address.city.message}
          </Label>
        )}
      </div>
      <div>
        <Input {...register("address.state")} placeholder="State" />
        {errors?.address?.state && (
          <Label size="xs" className="text-red-500 pl-1.5">
            {errors.address.state.message}
          </Label>
        )}
      </div>
      <div>
        <Input {...register("address.postalCode")} placeholder="Postal Code" />
        {errors?.address?.postalCode && (
          <Label size="xs" className="text-red-500 pl-1.5">
            {errors.address.postalCode.message}
          </Label>
        )}
      </div>
      <div>
        <Input {...register("address.country")} placeholder="Country" />
        {errors?.address?.country && (
          <Label size="xs" className="text-red-500 pl-1.5">
            {errors.address.country.message}
          </Label>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
