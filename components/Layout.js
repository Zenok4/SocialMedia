import NavigationCard from "../components/NavigationCard";

export default function Layout({children, hideNavigation = false}) {
  let rightComlumnClasses = ''
  if(hideNavigation){
    rightComlumnClasses += 'w-full'
  }
  else{
    rightComlumnClasses += 'mx-4 md:mx-0 md:w-9/12'
  }
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
      {!hideNavigation && (
        <div className="fixed z-10 md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard />
        </div>
      )}

      <div className={rightComlumnClasses}>
        {children}
      </div>
    </div>
  );
}
