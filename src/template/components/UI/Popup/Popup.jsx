import classNames from 'classnames';

const Popup = ({
  onClose = () => {}, children, className, ...props
}) => (
  <>
    <div className="popup_background" onClick={onClose} />
    <div className={classNames('popup', { [className]: className })} {...props}>
      {children}
    </div>
  </>
);

export default Popup;
