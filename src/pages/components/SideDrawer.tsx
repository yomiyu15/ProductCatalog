import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const SideDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          position: "absolute", // Make sure it overlays content
          height: "100%", // Full height
          top: 0,
          left: 0,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem button onClick={() => navigateTo("/conventional-banking-products")}>
          <ListItemText primary="2. Banking Products and Services" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigateTo("/conventional-banking-products")}>
          <ListItemText primary="2.1 Conventional Banking Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/deposit-products")}>
          <ListItemText primary="Deposit Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/local-currency-deposit-products")}>
          <ListItemText primary="Local currency deposit products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/demand-deposit-accounts")}>
          <ListItemText primary="Demand Deposit Accounts" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/foreign-currency-deposit-products")}>
          <ListItemText primary="Foreign Currency Deposit Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/credit-loan-banking-products")}>
          <ListItemText primary="Credit/Loan Banking Products" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigateTo("/interest-free-banking-products")}>
          <ListItemText primary="2.2 Interest Free Banking Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/saving-deposit-banking-products")}>
          <ListItemText primary="Saving/Deposit Banking Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/local-currency-deposit-products-ifb")}>
          <ListItemText primary="Local currency Deposit Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/foreign-currency-deposit-products-ifb")}>
          <ListItemText primary="Foreign Currency Deposit Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/ifb-financing-products")}>
          <ListItemText primary="IFB Financing products" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigateTo("/digital-banking-products")}>
          <ListItemText primary="2.3 Digital Banking Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/mobile-digital-banking-products")}>
          <ListItemText primary="Mobile/Digital Banking Products" />
        </ListItem>
        <ListItem button onClick={() => navigateTo("/card-banking-products")}>
          <ListItemText primary="Card Banking Products" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
