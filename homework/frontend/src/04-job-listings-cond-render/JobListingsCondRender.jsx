import "./App.css";
import "./New.css";
import ListingCard from "./components/ListingCard";
import data from "./data.json";

const JobListingsCondRender = () => {
  const listings = data.map((item, itemIndex) => {
    return (
      <ListingCard
        key={itemIndex}
        title={item.position}
        companyName={item.company}
        companyLogo={item.logo || "/images/company-placeholder.svg"}
        uploadDate={item.postedAt}
        contract={item.contract}
        location={item.location}
        isNew={item.new}
        isFeatured={item.featured}
        languages={item.languages}
        tags={[...item.languages, ...item.tools, item.role, item.level]}
      />
    )
  })

  return (
    <div>
      <img className="banner-img" src="/images/bg-header-mobile.svg" alt="" />
      <div className="container card-container">{listings}</div>
    </div>
  )
}

export default JobListingsCondRender
