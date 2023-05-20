import { 
    // Button,
    Col,
    Form,
    Input,
    // message,
    // Modal,
    Row,
    Table,
    // DatePicker
} from "antd";

import React, { FC, useState } from "react";

// import css from "./message_manage.less"

const MessageManage:FC = (props) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div >
            <div style={{ width: "100%" }}>
                <Form>
                    <Row gutter={24}>
                    <div
                        className={collapsed ? css.collapsed : ""}
                        style={{ paddingTop: "10px" }}
                    >
                        <Col span={12}>
                        <Form.Item label="申请单类型">
                            {/* <SelectApplyType
                            placeholder="请选择"
                            value="102"
                            disabled
                            onChange={(value: any) => {
                                changeSearchValues("applyType", value);
                            }}
                            /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="申请单状态">
                            {/* <SelectApplyStatus
                            placeholder="请选择"
                            value={searchParams.applyStatus}
                            onChange={(value: any) => {
                                changeSearchValues("applyStatus", value);
                            }}
                            /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="申请人姓名">
                        {/* <Form.Item label="申请人姓名" {...formItemLayout}> */}
                            {/* <Input
                            placeholder="请输入申请人姓名"
                            value={searchParams.applyPersonName}
                            onChange={(value: any) =>
                                changeSearchValues(
                                "applyPersonName",
                                value.target.value
                                )
                            }
                            /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="申请人工号/NT">
                        {/* <Form.Item label="申请人工号/NT" {...formItemLayout}> */}
                            {/* <SelectEmployee
                            value={searchParams.applyPersonId}
                            placeholder="请输入申请人工号/NT"
                            onChange={(value: any) =>
                                changeSearchValues("applyPersonId", value)
                            }
                            /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12} style={{ height: "30px" }}>
                        <Form.Item label="流水号">
                        {/* <Form.Item label="流水号" {...formItemLayout}> */}
                            {/* <Input
                            placeholder="请输入申请单流水号"
                            value={searchParams.applyCode}
                            onChange={(value: any) =>
                                changeSearchValues("applyCode", value.target.value)
                            } */}
                            {/* /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="BU">
                        {/* <Form.Item label="BU" {...formItemLayout}> */}
                            {/* <SelectRecruitDistributeBu
                            placeholder="请选择"
                            value={searchParams.sbuId}
                            onChange={(value: any) => {
                                changeSearchValues("sbuId", value);
                            }}
                            /> */}
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="员工类型">
                        {/* <Form.Item label="员工类型" {...formItemLayout}> */}
                            {/* <SelectEmployType
                            placeholder="请选择"
                            value={searchParams.employeeType}
                            onChange={(value: any) => {
                                changeSearchValues("employeeType", value);
                            }}
                            /> */}
                        </Form.Item>
                        </Col>
                    </div>
                    {/* <Col span={24}>
                        <div className={css.searchButton}>
                        <Button type="primary" onClick={() => onSearchClick()}>
                            查询
                        </Button>
                        <Button onClick={resetBtn}>重置</Button>
                        </div>
                    </Col> */}
                    </Row>
                </Form>
             </div> 
        </div>
    )
}

export default MessageManage;