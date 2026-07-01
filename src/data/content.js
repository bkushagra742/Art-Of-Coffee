import { Star, Coffee, Heart, Users, Award, Leaf } from "lucide-react";
import { C } from "../theme";

export const NAV_LINKS = ["About", "Menu", "Experience", "Gallery", "Reviews", "Visit"];

export const GALLERY = [
  { img: "img_exterior", label: "Art of Coffee — Ujjain", tall: true },
  { img: "img_latte", label: "Handcrafted Latte Art", tall: false },
  { img: "img_shake", label: "Signature Shake", tall: false },
  { img: "img_interior1", label: "The Space", tall: true },
  { img: "img_friends", label: "Evenings at AOC", tall: false },
  { img: "img_cup", label: "AOC Signature Cup", tall: false },
  { img: "img_reading", label: "Your Third Place", tall: true },
  { img: "img_interior2", label: "Cozy Corner", tall: false },
];

export const REVIEWS = [
  {
    name: "Arjun Sharma",
    loc: "Ujjain",
    rating: 5,
    img: "img_shake",
    text: "The cold coffee and shakes here are genuinely the best in Ujjain. Came once and now I visit every week. The interiors are so premium and the staff always makes you feel welcome.",
    date: "2 months ago",
  },
  {
    name: "Priya Malhotra",
    loc: "Indore",
    rating: 5,
    img: "img_latte",
    text: "Visited during a trip to Ujjain and this place completely changed my expectations of what a café here could be. The latte art was stunning and the cold brew was exceptional.",
    date: "3 months ago",
  },
  {
    name: "Rohan Tiwari",
    loc: "Ujjain",
    rating: 5,
    img: "img_friends",
    text: "Came with a group of friends for an evening hangout and we all loved it. The ambience is cozy yet premium, the shakes are thick and flavourful. Already planning our next visit.",
    date: "1 month ago",
  },
  {
    name: "Neha Gupta",
    loc: "Ujjain",
    rating: 5,
    img: "img_cup",
    text: "The Oreo shake is absolutely divine. Beautiful café, great music, AC is perfect. Staff is super helpful and the service was fast. Highly recommend to anyone visiting Ujjain.",
    date: "3 weeks ago",
  },
  {
    name: "Vikram Joshi",
    loc: "Bhopal",
    rating: 5,
    img: "img_reading",
    text: "Drove from Bhopal after seeing it on social media. 100% worth it. Perfect place to sit, read, sip a coffee and just exist. The kind of café every city deserves.",
    date: "5 weeks ago",
  },
];

export const MENU_CATS = ["All", "Coffee", "Cold Coffee", "Shakes", "Snacks", "Desserts"];

export const MENU_ITEMS = [
  { name: "Espresso", cat: "Coffee", price: 80, desc: "Bold, concentrated — the purest form of coffee", popular: false },
  { name: "Cappuccino", cat: "Coffee", price: 120, desc: "Velvety microfoam meets rich double espresso", popular: true },
  { name: "Cafe Latte", cat: "Coffee", price: 130, desc: "Smooth, creamy and perfectly balanced — a daily ritual", popular: true },
  { name: "Mocha", cat: "Coffee", price: 150, desc: "Espresso and rich chocolate in a warm embrace", popular: false },
  { name: "Filter Coffee", cat: "Coffee", price: 70, desc: "Traditional South Indian decoction, served right", popular: false },
  { name: "Americano", cat: "Coffee", price: 100, desc: "Clean, bold and effortlessly drinkable", popular: false },
  { name: "Cold Brew", cat: "Cold Coffee", price: 160, desc: "12 hours steeped for extraordinary smoothness", popular: true },
  { name: "Iced Latte", cat: "Cold Coffee", price: 140, desc: "Chilled espresso poured over fresh milk and ice", popular: true },
  { name: "Coffee Frappe", cat: "Cold Coffee", price: 150, desc: "Blended cold coffee — thick, indulgent, unforgettable", popular: false },
  { name: "Vietnamese Coffee", cat: "Cold Coffee", price: 130, desc: "Condensed milk meets dark roast — a sweet caffeine hit", popular: false },
  { name: "Oreo Shake", cat: "Shakes", price: 160, desc: "Crushed Oreo blended thick — Ujjain's favourite", popular: true },
  { name: "KitKat Shake", cat: "Shakes", price: 170, desc: "Crunchy chocolate indulgence in every sip", popular: true },
  { name: "Strawberry Shake", cat: "Shakes", price: 150, desc: "Fresh, fruity and naturally sweet", popular: false },
  { name: "Mango Shake", cat: "Shakes", price: 140, desc: "Thick Alphonso mango — pure sunshine in a glass", popular: false },
  { name: "Chocolate Shake", cat: "Shakes", price: 160, desc: "Rich chocolate blended to silky perfection", popular: false },
  { name: "Garlic Bread", cat: "Snacks", price: 90, desc: "Crispy, buttery and generously herb-loaded", popular: true },
  { name: "Veg Sandwich", cat: "Snacks", price: 100, desc: "Grilled with crisp seasonal vegetables", popular: false },
  { name: "Nachos", cat: "Snacks", price: 120, desc: "Crispy nachos with housemade salsa and cheese dip", popular: false },
  { name: "Brownie", cat: "Desserts", price: 130, desc: "Warm fudgy chocolate square — served with love", popular: true },
  { name: "Cheesecake", cat: "Desserts", price: 170, desc: "Velvety New York-style slice on a buttery crust", popular: false },
  { name: "Waffle", cat: "Desserts", price: 150, desc: "Golden and crisp, draped with maple butter", popular: false },
];

export const HIGHLIGHTS = [
  { icon: Star, label: "4.7 Rating", sub: "128+ Google Reviews", color: C.gold },
  { icon: Coffee, label: "Premium Coffee", sub: "Expertly crafted daily", color: C.brown },
  { icon: Heart, label: "Cozy Ambience", sub: "Instagram-worthy space", color: "#C26565" },
  { icon: Users, label: "Friendly Staff", sub: "Always welcoming", color: C.green },
  { icon: Award, label: "Famous Shakes", sub: "Signature house recipes", color: "#C9A84C" },
  { icon: Leaf, label: "Relaxing Vibe", sub: "Your Ujjain third place", color: C.green },
];

export const EXPERIENCE_CARDS = [
  { title: "A Space to Breathe", sub: "Step away from the city rush. Our interiors are designed to make you feel calm and at ease from the first step in.", img: "img_reading" },
  { title: "Your Remote Office", sub: "Comfortable seating, great coffee and a peaceful atmosphere. Art of Coffee is Ujjain's best-kept secret for focused work.", img: "img_cup" },
  { title: "Perfect for Dates", sub: "Warm lighting, beautiful aesthetics and a menu that impresses. Every visit becomes a story worth telling.", img: "img_latte" },
  { title: "Gather with Friends", sub: "Our space was made for conversations, laughter and the kind of memories that bring you back every time.", img: "img_friends" },
];
