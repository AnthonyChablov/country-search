import React from "react";

const Container = ({children}: { children: React.ReactNode }  ) => {
  return (
    <div className="py-8 px-7 max-w-7xl mx-auto">
        {children}
    </div>
  )
}

export default Container