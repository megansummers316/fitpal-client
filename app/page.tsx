//this is the default site and will not need to be in an extra folder

export default function Home() {
  return ( //have to do return statement to make html show on website
    //everything in the return must have the same parent which is why we add the main element
    <main> 
      <h1>FitPal</h1>
      <p>This site is built in COMP2068</p>
    </main> 
  )
}
