function App2() {
  return (
    <>
      <Routes>
        <Route path="/" element=<HomeNavBAR /> />
      </Routes>

      <div>
        <Routes>
          <Route path="/" element=<HomeMainContent /> />
        </Routes>
      </div>
    </>
  );
}
