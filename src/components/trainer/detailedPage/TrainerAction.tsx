import { Button } from "@/components/ui/button";

export function TrainerActions() {
 

  return (
    <div className="flex gap-4">
      {/* <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen}> */}
        <Button className="!rounded-button">
          <i className="fas fa-calendar-alt mr-2"></i>
          Book Session
        </Button>
      {/* </BookingDialog> */}

      {/* <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}> */}
        <Button variant="outline" className="!rounded-button">
          <i className="fas fa-envelope mr-2"></i>
          Contact
        </Button>
      {/* </ContactDialog> */}
    </div>
  );
}