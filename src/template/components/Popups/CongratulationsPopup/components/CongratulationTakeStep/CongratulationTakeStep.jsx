const CongratulationTakeStep = ({ nextStep }) => <>
  <div className="popup-winner__desc">
    Orem Ipsum Dolor Sit Amet, Consectetur
    Adipiscing Elit, Sed Do Eiusmod Tempor
    Incididunt Ut Labore Et  Dolore Magna
    Quis Nostrud Exercitation Ullamco
    Laboris Nisi Ut Aliquip Ex Ea Commodo
    Conse Quat.
    Duis Aute Irure Dolor In Reprehenderit In
    Voluptate Velit Esse
    Cillum Dolore Eu Fugiat Nulla Pariatur
    Excepteur Sint Occaecat Cupidatat Non
    Proident, Sunt In Culpa Qui Officia Deserunt
    Mollit Anim Id Est Laborum."
  </div>
  <div className="popup-gray__btn-container">
    <div onClick={nextStep} className="popup-gray__btn popup-gray__btn-green">Take gifts</div>
  </div>
</>;

export default CongratulationTakeStep;
