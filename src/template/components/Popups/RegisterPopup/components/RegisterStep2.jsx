const RegisterStep2 = () => (
  <div className="popup__row">
    <div className="popup__row__line">
      <div className="popup__name">
        Personal information
      </div>
      <div className="popup__line">
        <select className="popup__select error select" name="">
          <option className="popup__option option" value="">Mr</option>
          <option className="popup__option option" value="">Mrs</option>
        </select>
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <input className="popup__input input" type="email" placeholder="Name, Surename" />
      </div>
      <div className="popup__error">
        Enter your personal information
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Date of birth
      </div>
      <div className="popup-personal__row">
        <div className="popup-personal__column">
          <div className="popup__line">
            <select className="popup__select error select" name="">
              <option className="popup__option option" value="" disabled selected>Month</option>
              <option className="popup__option option" value="">January</option>
              <option className="popup__option option" value="">February</option>
              <option className="popup__option option" value="">March</option>
              <option className="popup__option option" value="">April</option>
              <option className="popup__option option" value="">May</option>
              <option className="popup__option option" value="">June</option>
              <option className="popup__option option" value="">July</option>
              <option className="popup__option option" value="">August</option>
              <option className="popup__option option" value="">September</option>
              <option className="popup__option option" value="">October</option>
              <option className="popup__option option" value="">November</option>
              <option className="popup__option option" value="">December</option>
            </select>
          </div>
        </div>
        <div className="popup-personal__column">
          <div className="popup__line">
            <select className="popup__select error select" name="">
              <option className="popup__option option" value="" disabled selected>Day</option>
              <option className="popup__option option" value="">1</option>
              <option className="popup__option option" value="">2</option>
              <option className="popup__option option" value="">3</option>
              <option className="popup__option option" value="">4</option>
              <option className="popup__option option" value="">5</option>
              <option className="popup__option option" value="">6</option>
              <option className="popup__option option" value="">7</option>
              <option className="popup__option option" value="">8</option>
              <option className="popup__option option" value="">9</option>
              <option className="popup__option option" value="">10</option>
              <option className="popup__option option" value="">11</option>
              <option className="popup__option option" value="">12</option>
              <option className="popup__option option" value="">13</option>
              <option className="popup__option option" value="">14</option>
              <option className="popup__option option" value="">15</option>
              <option className="popup__option option" value="">16</option>
              <option className="popup__option option" value="">17</option>
              <option className="popup__option option" value="">18</option>
              <option className="popup__option option" value="">19</option>
              <option className="popup__option option" value="">20</option>
              <option className="popup__option option" value="">21</option>
              <option className="popup__option option" value="">22</option>
              <option className="popup__option option" value="">23</option>
              <option className="popup__option option" value="">24</option>
              <option className="popup__option option" value="">25</option>
              <option className="popup__option option" value="">26</option>
              <option className="popup__option option" value="">27</option>
              <option className="popup__option option" value="">28</option>
              <option className="popup__option option" value="">29</option>
              <option className="popup__option option" value="">30</option>
            </select>
          </div>
        </div>
        <div className="popup-personal__column">
          <div className="popup__line">
            <select className="popup__select error select" name="">
              <option className="popup__option option" value="" disabled selected>Year</option>
              <option className="popup__option option" value="">2020</option>
              <option className="popup__option option" value="">2019</option>
              <option className="popup__option option" value="">2018</option>
              <option className="popup__option option" value="">2017</option>
              <option className="popup__option option" value="">2016</option>
              <option className="popup__option option" value="">2015</option>
            </select>
          </div>
        </div>
      </div>
      <div className="popup__error__block">
        <div className="popup__error">
          Select your birth month.
        </div>
        <div className="popup__error">
          Enter a valid day of the month.
        </div>
        <div className="popup__error">
          Enter a valid year.
        </div>
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Country of residence
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <select className="popup__select error select" name="">
          <option className="popup__option option" value="" disabled selected>Country</option>
          <option className="popup__option option" value="">Armenia</option>
          <option className="popup__option option" value="">Russia</option>
          <option className="popup__option option" value="">United States</option>
          <option className="popup__option option" value="">United Kingdom</option>
          <option className="popup__option option" value="">Mexico</option>
          <option className="popup__option option" value="">Spain</option>
        </select>
      </div>
      <div className="popup__error">
        Enter your country of residence
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Address
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <input className="popup__input error input" type="text" placeholder="Addres" />
      </div>
      <div className="popup__error">
        Enter your address
      </div>
    </div>
  </div>
);

export default RegisterStep2;
