import Button from "@mui/material/Button";
import { useJumboDialog } from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import DialogBase from "../DialogBase/DialogBase";

const DialogConfirm = ({ open = false, onYes, onNo, ...restProps }: any) => {
  const { hideDialog } = useJumboDialog();

  const handleClose = () => {
    onNo();
    hideDialog();
  };

  return (
    <DialogBase
      sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}
      fullWidth
      maxWidth={"xs"}
      actions={
        <>
          <Button variant={"contained"} onClick={onYes}>
            Yes
          </Button>
          <Button onClick={handleClose}>No</Button>
        </>
      }
      {...restProps}
    />
  );
};

export { DialogConfirm };
