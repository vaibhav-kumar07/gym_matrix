'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ITrainer } from "@/types/trainer";
import { useState } from "react";


export default function TrainerContact({ trainer }: { trainer: ITrainer }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-6  ">
        <Card className="p-6  space-y-4  border rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact {trainer.name}</h2>
          <div className="grid grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input 
                placeholder="Your Email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Textarea 
                placeholder="Your Message" 
                className="h-32"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-600"></i>
                {/* <span>Response within {trainer.}</span> */}
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-600"></i>
                <span>Available for calls {}</span>
              </div>
              <div className="flex gap-4 mt-6">
              
                  <Button 
                    
                    variant="outline"
                    onClick={() => window.open(  trainer.socialLinks?.instagram, '_blank')}
                  >
                    <i className={`fab fa-${  trainer.socialLinks?.instagram} mr-2`}></i>
                    {  trainer.socialLinks?.instagram}
                  </Button>
              </div>
            </div>
          </div>
        </Card>

    </div>
  );
}