import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { IGymAddress } from "@/types/gym";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactInfoProps {
  contact: {
    phoneNumber: string;
    email: string;
  };
  address: IGymAddress;
}

export const ContactInfo = ({ contact, address }: ContactInfoProps) => (
  <Card className="p-2  transition-shadow">
    <Label size="lg" className=" font-semibold mb-3 flex items-center ">
      <MapPin className="w-6 h-6 text-primary mr-2 " />
      Contact Information
    </Label>
    <div className="">
      <a
        href={`tel:${contact.phoneNumber}`}
        className="flex items-center p-2 hover:bg-gray-50 rounded-lg group transition-colors"
      >
        <Phone
          size={30}
          className=" p-2 text-primary bg-primary/10 rounded-full group-hover:scale-110 transition-transform"
        />
        <Label
          size="sm"
          className="ml-4 text-gray-600 group-hover:text-primary"
        >
          {contact.phoneNumber}
        </Label>
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="flex items-center p-2 hover:bg-gray-50 rounded-lg group transition-colors"
      >
        <Mail
          size={30}
          className=" p-2 text-primary bg-primary/10 rounded-full group-hover:scale-110 transition-transform"
        />
        <Label
          size="sm"
          className="ml-4 text-gray-600 group-hover:text-primary"
        >
          {contact.email}
        </Label>
      </a>
      <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg group transition-colors">
        <MapPin
          size={30}
          className=" p-2 text-primary bg-primary/10 rounded-full group-hover:scale-110 transition-transform"
        />
        <div className="flex flex-col ">
          <Label
            size="sm"
            className="ml-4 text-gray-600"
          >{`${address.street}, ${address.city}`}</Label>
          <Label
            size="sm"
            className="ml-4 text-gray-600"
          >{`${address.state}, ${address.country}, ${address.postalCode}`}</Label>
        </div>
      </div>
    </div>
  </Card>
);
