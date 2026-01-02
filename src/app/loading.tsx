import {
  NavbarSkeleton,
  HeaderSkeleton,
  BlogSectionSkeleton,
  ProjectsSectionSkeleton,
} from "@/components/skeleton"

export default function HomeLoading() {
  return (
    <div className="animate-fade-in">
      <NavbarSkeleton />
      <HeaderSkeleton />
      <BlogSectionSkeleton />
      <ProjectsSectionSkeleton />
    </div>
  )
}
