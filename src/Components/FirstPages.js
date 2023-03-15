import React from 'react';
import {useState} from 'react';
import {Row, Col, Steps, Form, Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { CheckCircleOutlined, ProfileOutlined, CheckCircleTwoTone } from '@ant-design/icons/lib/icons';

export default function FirstPages() {
    const [current, setCurrent] = useState(0);
    const [loginDetails, setLoginDetails] = useState(null);
    const [profileDetails, setProfileDetails] = useState(null);
    const onFinishLogInForm = (values)=>{
        setLoginDetails(values)
        setCurrent(1);

    };

    const onFinishProfleForm = (values)=>{
        setProfileDetails(values)
        setCurrent(2);

    };

    const forms = [
        <LoginForm onFinish={onFinishLogInForm} initialValues={loginDetails}/>,
        <ProfileForm onFinish={onFinishProfleForm} initialValues={profileDetails}/>,
        <Finish/>

    ];

    const isStepDisabled = (stepNumber)=>{
        if(stepNumber===0){
            return false;
        }
        if(stepNumber===1){
            return loginDetails ===null
        }
        if(stepNumber===2){
            return loginDetails=== null || profileDetails===null
        }

    }



  return (
    <div>
        <Row justify='center'>
        <Col span={12} style={{ marginTop:'300px'}}>
          <Steps style={{padding:'32px 16px'}} onChange={setCurrent} current={current}>
            <Steps.step disabled={isStepDisabled(0)} title="Login" icon={<LoginOutlined/>}/>
            <Steps.step disabled={isStepDisabled(1)} title="Profile" icon={<ProfileOutlined/>}/>
            <Steps.step disabled={isStepDisabled(2)} title="Finish" icon={<CheckCircleOutlined/>}/>
          </Steps>
          {forms[current]}
          
        </Col>
      </Row>
    </div>
  );
}

function LoginForm({onFinish, initialValues}){
    return <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item 
        label='Email'
        name={'emailAdress'}
        rules={[
            {
                required:'true',
                message:'Enter Email'
            }
        ]}
        >
            <Input placeholder='Write Email'/>
        </Form.Item>
        <Form.Item
        label='Password'
        name={'Password'}
        rules={[
            {
                required:'true',
                message:'Enter Password'
            }
        ]}
        >
            <Input.Password placeholder='Write Password'/>
        </Form.Item>
        <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
}

function ProfileForm({onFinish, initialValues}){
    return <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item 
        label='First Name'
        name={'firstName'}
        rules={[
            {
                required:'true',
                message:'Enter FirstName'
            }
        ]}
        >
            <Input placeholder='Write FirstName'/>
        </Form.Item>
        <Form.Item
        label='LastName'
        name={'lastName'}
        rules={[
            {
                required:'true',
                message:'Enter LastName'
            }
        ]}
        >
            <Input placeholder='Write LastName'/>
        </Form.Item>
        <Button type='primary' htmlType='submit'>Continue</Button>
    </Form>
}

function Finish(){
    return <>
    <h1>You are all set!</h1>
    <Button type='primary'>Finish</Button>
    </>
}
