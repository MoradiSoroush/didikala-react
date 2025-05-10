import React,{useState} from "react";
import { userOrders } from "../../../../datas";
import Table from "./../../../../Components/Table/Table"
export default function UserOrder() {

    const [mainOrders,setMainOrders] = useState(userOrders)


  return (
      <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
              <h2>همه سفارش‌ها</h2>
            </div>
            <div class="dt-sl">
            <Table orders={mainOrders}  rowsPerPage={5}/>
            </div>
          </div>
        </div>
      </div>
  );
}
