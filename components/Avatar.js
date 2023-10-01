function Avatar({src, size}) {
  let width = 'w-12';
  let height = 'h-12';
  if(size === 'lg'){
    width = 'w-24 md:w-36';
    height = 'h-24 md:h-36';
  }
  return (
    <div className={`${width} ${height} rounded-full overflow-hidden`}>
      <img src={src} alt=""/>
    </div>
  );
}

export default Avatar;
