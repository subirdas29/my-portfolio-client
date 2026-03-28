import { HeroSkeleton } from "@/components/shared/Skeletons";

// [PERFORMANCE] Route-level loading uses HeroSkeleton instead of full-page spinner.
// This matches the actual page layout and prevents CLS during navigation.
const Loader = () => {
  return <HeroSkeleton />;
};

export default Loader;
