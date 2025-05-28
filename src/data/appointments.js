import health from '../assets/health.png';
import eye from '../assets/eye.png';
import heart from '../assets/heart.png';
import doctor from '../assets/doctor.png';

export const appointments = {
    Thursday: [
      { title: "Health checkup complete", time: "11:00 AM", img:health },
      { title: "Ophthalmologist", time: "14:00 PM", img:eye },
    ],
    Saturday: [
      { title: "Cardiologist", time: "12:00 AM", img:heart },
      { title: "Neurologist", time: "16:00 PM", img:doctor },
    ],
  };