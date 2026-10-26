/**
 * Medibloom Data Store
 * Mock medicines and doctors designed for adults 55+ and children.
 * All data supports plain-language descriptions and accessible scheduling.
 */

const MEDIBLOOM_DATA = {
  // Mock Medicines for Seniors and Children
  medicines: [
    {
      id: "med-1",
      name: "Metoprolol Tartrate",
      commonName: "Heart Rhythm Helper",
      targetGroup: "senior",
      targetLabel: "Senior Care (Age 55+)",
      dosage: "25 mg",
      form: "Round white tablet with split line",
      colorTag: "#0b6e68",
      timeOfDay: "morning",
      timeLabel: "Morning with Breakfast (8:00 AM)",
      scheduledHour: 8,
      scheduledMinute: 0,
      instructions: "Take with food and a full glass of warm or room-temperature water.",
      plainLanguageExplanation:
        "This gentle medicine helps your heart beat steadily and without working too hard. Think of it like a gentle rhythm keeper for your pulse, lowering high blood pressure and keeping you relaxed throughout your day.",
      howToTake: [
        "Take 1 tablet right after your morning breakfast.",
        "Drink a full glass of water with it.",
        "Sit comfortably for 5 minutes after taking it.",
        "Check your pulse if your doctor suggested keeping a log."
      ],
      friendlyTips: "Best taken at the same time every morning. If you ever feel a little dizzy standing up, take your time and pause before walking.",
      warnings: "Do not skip doses or stop suddenly without talking to Dr. Robert Vance.",
      doctorName: "Dr. Robert Vance, MD (Cardiology & Geriatrics)",
      refillDate: "Nov 15, 2026",
      pillsLeft: 18,
      taken: false
    },
    {
      id: "med-2",
      name: "Amoxicillin Pediatric Suspension",
      commonName: "Ear & Throat Bubblegum Syrup",
      targetGroup: "child",
      targetLabel: "Child Care (Ages 4-12)",
      dosage: "5 mL (1 measured teaspoon)",
      form: "Pink liquid syrup with gentle bubblegum flavor",
      colorTag: "#d946ef",
      timeOfDay: "morning",
      timeLabel: "Morning after Meal (8:30 AM)",
      scheduledHour: 8,
      scheduledMinute: 30,
      instructions: "Shake well before measuring using the supplied marked oral syringe or spoon.",
      plainLanguageExplanation:
        "This is a sweet pink syrup that acts like a friendly superhero shield inside your body. It fights off the tiny germ invaders that cause earaches and sore throats so you can get back to playing outside!",
      howToTake: [
        "Gently shake the bottle 5 times before pouring.",
        "Measure exactly to the 5 mL line on the yellow spoon.",
        "Swallow gently, then take a sip of cool juice or water.",
        "Store the bottle in the refrigerator door."
      ],
      friendlyTips: "Tastes great! You can earn a star on your Medibloom badge board every time you take it without fussing.",
      warnings: "Finish all 7 days of the medicine even if you feel 100% better, so the germs don't come back.",
      doctorName: "Dr. Emily Chen, MD (Pediatrics & Family Care)",
      refillDate: "Nov 02, 2026",
      pillsLeft: 12,
      taken: false
    },
    {
      id: "med-3",
      name: "Glucosamine & Chondroitin Plus D3",
      commonName: "Joint Comfort & Bone Support",
      targetGroup: "senior",
      targetLabel: "Senior Care (Age 55+)",
      dosage: "1 coated caplet",
      form: "Smooth oval cream tablet",
      colorTag: "#0284c7",
      timeOfDay: "afternoon",
      timeLabel: "Afternoon with Lunch (1:00 PM)",
      scheduledHour: 13,
      scheduledMinute: 0,
      instructions: "Take with your main lunch meal and plenty of water.",
      plainLanguageExplanation:
        "This natural joint cushion nourishes your knees, hips, and finger joints. It works like smooth bicycle oil for your joints, keeping them comfortable and flexible for gardening, walks, and playing with grandchildren.",
      howToTake: [
        "Take with your lunch sandwich or soup.",
        "Swallow whole; do not crush the smooth coating.",
        "Keep the bottle tightly capped away from high heat."
      ],
      friendlyTips: "Pairs wonderfully with light morning stretches and daily short walks in the sunshine.",
      warnings: "Consult doctor if you have shellfish allergies.",
      doctorName: "Dr. Margaret Thorne, DO (Rheumatology & Healthy Aging)",
      refillDate: "Dec 01, 2026",
      pillsLeft: 42,
      taken: false
    },
    {
      id: "med-4",
      name: "Children's Chewable Multivitamin",
      commonName: "Little Champion Dino Bites",
      targetGroup: "child",
      targetLabel: "Child Care (Ages 4-12)",
      dosage: "1 chewable dinosaur tablet",
      form: "Chewable fruit dinosaur tablet",
      colorTag: "#ea580c",
      timeOfDay: "afternoon",
      timeLabel: "After School Snack (3:30 PM)",
      scheduledHour: 15,
      scheduledMinute: 30,
      instructions: "Chew completely before swallowing. Delicious natural berry flavor.",
      plainLanguageExplanation:
        "These fun dinosaur chewables give your muscles, bones, and brain the daily vitamins they need to help you grow tall, stay sharp in school, and keep lots of energy for playground tag!",
      howToTake: [
        "Take 1 dinosaur after your afternoon fruit or milk snack.",
        "Chew thoroughly like a gummy bear.",
        "Tell an adult when you've enjoyed your dino bite!"
      ],
      friendlyTips: "Always remind children that vitamins are healthy helpers, not candy, and should only be given by an adult.",
      warnings: "Keep bottle out of reach of little toddlers.",
      doctorName: "Dr. Emily Chen, MD (Pediatrics & Family Care)",
      refillDate: "Dec 20, 2026",
      pillsLeft: 26,
      taken: false
    },
    {
      id: "med-5",
      name: "Atorvastatin Calcium",
      commonName: "Artery & Vessel Protector",
      targetGroup: "senior",
      targetLabel: "Senior Care (Age 55+)",
      dosage: "20 mg",
      form: "White elliptical tablet with 'AT20' stamp",
      colorTag: "#0f766e",
      timeOfDay: "evening",
      timeLabel: "Evening / Bedtime (8:30 PM)",
      scheduledHour: 20,
      scheduledMinute: 30,
      instructions: "Take at bedtime with water. Avoid drinking large amounts of grapefruit juice.",
      plainLanguageExplanation:
        "While you sleep peacefully, this medicine cleans up excess bad fats from your blood pipes, keeping your arteries smooth, wide, and clear so blood flows easily to your brain and heart.",
      howToTake: [
        "Take right around the time you wind down for sleep.",
        "Swallow with half a cup of water.",
        "If you miss a night, simply take your normal dose the next evening."
      ],
      friendlyTips: "Your liver naturally makes most cholesterol at night, which is why taking this right before bedtime works best.",
      warnings: "Tell your doctor if you ever experience unusual muscle soreness.",
      doctorName: "Dr. Robert Vance, MD (Cardiology & Geriatrics)",
      refillDate: "Nov 28, 2026",
      pillsLeft: 22,
      taken: false
    },
    {
      id: "med-6",
      name: "Melatonin Gentle Sleep Drops",
      commonName: "Bedtime Sweet Dreams Helper",
      targetGroup: "child",
      targetLabel: "Child Care (Ages 5-12)",
      dosage: "0.5 mg (1 dropper)",
      form: "Clear chamomile & berry liquid drops",
      colorTag: "#6366f1",
      timeOfDay: "evening",
      timeLabel: "Bedtime Story Time (8:00 PM)",
      scheduledHour: 20,
      scheduledMinute: 0,
      instructions: "Place in mouth 30 minutes before lights out during bedtime story.",
      plainLanguageExplanation:
        "When the stars come out, this sweet bedtime drop tells your eyes and brain that it's time to rest up and dream sweet dreams after a busy day of learning and fun.",
      howToTake: [
        "Squeeze the dropper into mouth or mix in 2 sips of water.",
        "Dim the room lights and open your bedtime storybook.",
        "Turn off screens and phones 30 minutes before sleep."
      ],
      friendlyTips: "Creates a peaceful routine that helps kids wind down naturally without struggle.",
      warnings: "Use under guidance of pediatrician for temporary sleep schedule resets.",
      doctorName: "Dr. Emily Chen, MD (Pediatrics & Family Care)",
      refillDate: "Dec 10, 2026",
      pillsLeft: 15,
      taken: false
    }
  ],

  // Mock Doctors for Senior and Pediatric/Family Care
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Robert Vance, MD",
      specialty: "Senior Medicine & Cardiology",
      audience: "Adults 55+ & Chronic Care",
      rating: "4.9 ★ (184 reviews)",
      experience: "24 years caring for older adults",
      clinic: "Oakridge Senior Health Center, Indiranagar, Bengaluru",
      avatarInitials: "RV",
      avatarBg: "#0b6e68",
      phone: "(555) 321-7890",
      bio: "Dr. Vance is known for his warm bedside manner, patience with hearing needs, and taking the time to listen to every question without ever rushing.",
      availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
      timeSlots: ["09:00 AM", "10:30 AM", "01:30 PM", "03:00 PM"]
    },
    {
      id: "doc-2",
      name: "Dr. Emily Chen, MD",
      specialty: "Pediatrics & Family Wellness",
      audience: "Children, Teens & Young Families",
      rating: "5.0 ★ (210 reviews)",
      experience: "16 years in pediatric and youth medicine",
      clinic: "Sunny Sprouts Pediatric Clinic, Bandra West, Mumbai",
      avatarInitials: "EC",
      avatarBg: "#d946ef",
      phone: "(555) 456-1122",
      bio: "Dr. Chen makes doctor visits fun and fear-free for kids. She uses stickers, gentle checkups, and speaks in simple words kids and parents understand.",
      availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
      timeSlots: ["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"]
    },
    {
      id: "doc-3",
      name: "Dr. Margaret Thorne, DO",
      specialty: "Joints, Mobility & Healthy Aging",
      audience: "Adults 55+ & Arthritis Support",
      rating: "4.8 ★ (142 reviews)",
      experience: "19 years in mobility and musculoskeletal care",
      clinic: "Silver Crest Wellness Pavilion, Jubilee Hills, Hyderabad",
      avatarInitials: "MT",
      avatarBg: "#0284c7",
      phone: "(555) 789-2234",
      bio: "Focuses on helping older adults stay active, independent, and free of joint stiffness through gentle exercises and personalized medicine.",
      availableDays: ["Tuesday", "Wednesday", "Friday"],
      timeSlots: ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM"]
    },
    {
      id: "doc-4",
      name: "Dr. Alan Morales, MD",
      specialty: "General Family Medicine & Preventative Care",
      audience: "All Ages (Seniors & Children Together)",
      rating: "4.9 ★ (195 reviews)",
      experience: "18 years treating multi-generation families",
      clinic: "Medibloom Community Family Health, Connaught Place, New Delhi",
      avatarInitials: "AM",
      avatarBg: "#0f766e",
      phone: "(555) 998-3344",
      bio: "Expert at coordinating care between grandparents, parents, and children, ensuring all medications work safely together.",
      availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
      timeSlots: ["08:30 AM", "10:00 AM", "01:00 PM", "03:30 PM"]
    }
  ]
};

// Storage Keys
const STORAGE_KEYS = {
  MEDS_TAKEN: "medibloom_taken_state_v1",
  ACTIVE_PROFILE: "medibloom_profile_filter",
  PENDING_APPOINTMENT: "medibloom_pending_apt",
  BOOKED_APPOINTMENTS: "medibloom_booked_apts"
};

/**
 * Helper to fetch taken medicines state from localStorage
 */
function getTakenState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MEDS_TAKEN);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Could not read localStorage:", e);
    return {};
  }
}

/**
 * Helper to save taken medicines state to localStorage
 */
function saveTakenState(state) {
  try {
    localStorage.setItem(STORAGE_KEYS.MEDS_TAKEN, JSON.stringify(state));
  } catch (e) {
    console.warn("Could not write to localStorage:", e);
  }
}

/**
 * Get active profile filter ('all', 'senior', 'child')
 */
function getActiveProfile() {
  try {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_PROFILE) || "all";
  } catch (e) {
    return "all";
  }
}

/**
 * Set active profile filter
 */
function setActiveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PROFILE, profile);
  } catch (e) {
    console.warn("Could not save profile:", e);
  }
}
