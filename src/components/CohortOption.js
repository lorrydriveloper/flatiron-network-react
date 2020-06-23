import React from 'react'

export default function CohortOption({id,cohort_lead, campus, course, graduation}) {
  
  return (
    <option value={id}>
      {`${course} with ${cohort_lead} an finished on ${graduation} at campus: ${campus}`}
    </option>
  );
}
