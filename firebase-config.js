const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const COURSES = [
  { id: "ptd-ft", name: "Primary Teacher's Diploma (Full time)", type: "Diploma", fee: 3000 },
  { id: "ptd-dist", name: "Primary Teacher's Diploma (Distance)", type: "Diploma", fee: 3500 },
  { id: "ecd-ft", name: "Early Childhood Diploma", type: "Diploma", fee: 3000 },
  { id: "ecd-dist", name: "Early Childhood Diploma (Pre-School)", type: "Diploma", fee: 3500 },
  { id: "sales-mkt", name: "Sales and Marketing Diploma", type: "Diploma", fee: 3000 },
  { id: "social-work", name: "Social Work Diploma", type: "Diploma", fee: 3000 },
  { id: "comm-dev", name: "Community Development Diploma", type: "Diploma", fee: 3000 },
  { id: "pr", name: "Public Relations Diploma", type: "Diploma", fee: 3000 },
  { id: "bus-admin", name: "Business Administration Diploma", type: "Diploma", fee: 3000 },
  { id: "hosp", name: "Hospitality and Events Management Diploma", type: "Diploma", fee: 2750 },
  { id: "food-prod-dip", name: "Food Production Diploma", type: "Diploma", fee: 2750 },
  { id: "computer", name: "Computer Hardware and Software", type: "Certificate", fee: 3000 },
  { id: "catering", name: "Food Production/Catering", type: "Certificate", fee: 2750 },
  { id: "plumbing", name: "Plumbing and Pipe Fitting", type: "Certificate", fee: 2750 },
  { id: "electrical", name: "Electrical Engineering", type: "Certificate", fee: 2750 },
  { id: "building", name: "Building and Construction", type: "Certificate", fee: 2750 },
  { id: "project-mgt", name: "Project Management", type: "Certificate", fee: 3000 }
];
