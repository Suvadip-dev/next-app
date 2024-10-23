import React from 'react'

function page({params} : any) {
  return (
    <div>
      {params.aboutId} {params.reviewId}
    </div>
  )
}

export default page
