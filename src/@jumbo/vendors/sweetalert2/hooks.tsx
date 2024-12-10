import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { useStyles } from './style';

const useSwalWrapper = () => {
    const sweetAlertStyles = useStyles();
    const FinalSwal = Swal.mixin({
        customClass: {
            container: `${sweetAlertStyles.container}`,
            popup: `${sweetAlertStyles.popup}`,
            title: `${sweetAlertStyles.title}`,
            closeButton: `${sweetAlertStyles.closeButton}`,
            image: `${sweetAlertStyles.image}`,
            htmlContainer: `${sweetAlertStyles.htmlContainer}`,
            confirmButton: `${sweetAlertStyles.confirmButton}`,
            cancelButton: `${sweetAlertStyles.cancelButton}`,
            footer: `${sweetAlertStyles.footer}`,
            denyButton:`${sweetAlertStyles.denyButton}`,
        },
        buttonsStyling: false,
    });

    return withReactContent(FinalSwal);
};

export default useSwalWrapper;