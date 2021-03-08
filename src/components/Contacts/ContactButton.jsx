import React from 'react'

export const ContactButton = ({url, className}) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <a
      href={url}
      className={`contacts__button`}
      title={className ? capitalizeFirstLetter(className) : ''}
      target="_blank"
      rel="noreferrer"
    >
      <button aria-label={className ? className : ''} className={className ? className : ''} />
    </a>
  )
}