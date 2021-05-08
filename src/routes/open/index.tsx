import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './index.scss'
import { Button, Divider, Form, Input, message } from 'antd';
import ModalFrom from '../../components/userFrom/Modal'
import axios from '../../utils/http'
import Captcha from '../../components/userFrom/Captcha'
const layout = {
    labelCol: { span: 4 },
  };
export default function OpenAgent() {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [clickNum, setClickNum] = useState(0);
    const [form] = Form.useForm();

    const getFromValue = (value: any) => {
        axios.post('/open',value).then((res: any) => {
            if (res.data.status === "200") {
                history.push("/home");
            }
        })
    }

    let madalValue = {
        clickNum: clickNum,
        visible: visible,
        fromType: "申请开通（阿波罗主机安全管理平台）",
        from: form,
        getFromValue: getFromValue
    }
    const setCaptchaValue = {
        form: form,
        fromType: "2",
        type:"email"
    }
    const openAgen = () => {
        setClickNum(clickNum + 1);
        setOpen(true);
        setVisible(true);
    }
    return (
        <div>
        <div className="open-box">
            <div className="open-box-top">
                <h4>主机安全agent</h4>
                <p>一款主机安全软件，为您提供主机漏洞检测、基线检查、病毒处理、资产统一管理等功能，为您建立安全运维管理平台。</p>
                <Button type="primary" onClick={openAgen}>开通主机安全agent</Button>
                <Divider />
                <a href="//#">了解产品详情</a><a href="//#">使用指南</a>
            </div>
            <div className="open-box-bottom">
                <img src="/images/open/open_banner.png" alt="" />
                <div className="open-box-bottom-item">
                    <div>
                        <img src="/images/open/open1.png" alt="集中安全管理" />
                        <div>
                            <h4>集中安全管理</h4>
                            <p>非单机版软件，在云端Web控制台统一管理所有服务器的安全状态。</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/open/open2.png" alt="资源占用极低" />
                        <div>
                            <h4>资源占用极低</h4>
                            <p>Agent插件正常资源仅占用 1%CPU 50MB内存以下。</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/open/open3.png" alt="实时安全监控" />
                        <div>
                            <h4>实时安全监控</h4>
                            <p>非触发式系统安全扫描，系统自动感知资产变化实施检测漏洞和黑客入侵行为</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/open/open4.png" alt="灵活安全处理" />
                        <div>
                            <h4>灵活安全处理</h4>
                            <p>不仅发现问题，还支持灵活的问题处理方式，闭环安全，降低处理风险。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {open &&
        <ModalFrom value={madalValue}>
        <Form
            form={form}
            name="form_in_modal"
            className="labelFrom"
            {...layout}
        >
        <Form.Item
        label="资产数量"
        name="num"
      >3 台
      </Form.Item>
      <Form.Item
        label="使用时长"
        name="time"
      >30 天（自然天）
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '输入的电子邮件无效!',
          },
          {
            required: true,
            message: '请输入您的电子邮件!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
              name="code"
              label="验证码"
              rules={[{ required: true, message: '请输入您获得的验证码!' }]}
            >
                <Row gutter={7}>
                <Col span={12}>
              <Input placeholder="验证码" />
              </Col>
              <Col span={4}>
              <Button type="primary">发送验证码</Button>
              </Col>
              </Row>
            </Form.Item> */}
            <Captcha value={setCaptchaValue} />
        </Form>
    </ModalFrom>
        }
        </div>
    )
};