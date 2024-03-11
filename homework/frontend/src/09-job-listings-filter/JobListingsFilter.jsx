import "./App.css"
import "./New.css"
import ListingCard from "./components/ListingCard"
import data from "./data.json"
import { useState } from "react"

export const JobListingsFilter = () => {
  const [filters, setFilters] = useState([])

  const addFilter = (tag) => {
    if (filters.includes(tag)) {
      return
    } else {
      setFilters([...filters, tag])
    }
  }

  const deleteFilter = (tag) => {
    const newFilters = filters.filter((savedTag) => {
      // return true if we save the tag
      // return false if we want to delete the tag

      if (tag !== savedTag) {
        return true
      } else {
        return false
      }
    })

    // const newFilters = filters.filter((savedTag) => tag !== savedTag)

    setFilters(newFilters)
  }

  // const clearAll = () => {
  //   setFilters([])
  // }

  let filteredListings

  if (filters.length === 0) {
    filteredListings = data
  } else {
    filteredListings = data.filter((item) => {
      const itemTags = [...item.languages, ...item.tools, item.role, item.level]

      // თუ ერთ-ერთი tag მაინც აქვს item-ს, დავაბრუნოთ true

      // for (let selectedFilter of filters) {
      //   if (!itemTags.includes(selectedFilter)) {
      //     return false;
      //   }
      // }

      // every/some
      return filters.every((selectedTag) => itemTags.includes(selectedTag))

      // return false;

      // if (item.location === "Worldwide") {
      //   return true;
      // } else {
      //   return false;
      // }
    })
  }

  const listings = filteredListings.map((item, itemIndex) => {
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
        addFilter={addFilter}
      />
    )
  })

  return (
    <div>
      <img className="banner-img" src="/images/bg-header-mobile.svg" alt="" />
      {/* SELECTED TAGS */}
      {filters.length !== 0 && (
        <div style={{ height: "30px", maxWidth: "350px", margin: "1rem auto" }}>
          {filters.map((tag) => {
            return (
              <button onClick={() => deleteFilter(tag)} key={tag}>
                {tag}
              </button>
            )
          })}
        </div>
      )}
      <div className="container card-container">{listings}</div>
    </div>
  )
}
