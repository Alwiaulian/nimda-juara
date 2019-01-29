import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
import styles from './style.less';

// const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@connect(({ form }) => ({
  data: form.step,
}))
@Form.create()
class TableFormKdadd extends React.PureComponent {
  render() {
    const { form, dispatch, data } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          dispatch({
            type: 'form/saveStepFormData',
            payload: values,
          });
          router.push('/form/Kd');
        }
      });
    };
    return (
      <Fragment>
        <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
          <Form.Item {...formItemLayout} label="Tambah Mata Pelajaran">
            {getFieldDecorator('payAccount', {
              initialValue: data.payAccount,
              rules: [{ required: true, message: 'BELUM TERISI' }],
            })(
              <Select placeholder="Tambah Mapel">
                <Option value="aa">Bahasa Indonesia</Option>
                <Option value="ab">Bahasa Inggris</Option>
                <Option value="ac">Bahasa Sunda</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Tambah Kode ">
            {getFieldDecorator('payAccountS', {
              initialValue: data.payAccountS,
              rules: [{ required: true, message: 'BELUM TERISI' }],
            })(
              <Select placeholder="masukkan kode">
                <Option value="cc">4001</Option>
                <Option value="d">4002</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Tambah Caption ">
            {getFieldDecorator('payAccountSS', {
              initialValue: data.payAccountSS,
              rules: [{ required: true, message: 'BELUM TERISI' }],
            })(
              <Select placeholder="masukkan caption">
                <Option value="cc">A</Option>
                <Option value="d">B</Option>
              </Select>
            )}
          </Form.Item>

          <Form.Item {...formItemLayout} label="Tambah Sekolah ">
            {getFieldDecorator('payAccountSSS', {
              initialValue: data.payAccountSSS,
              rules: [{ required: true, message: 'benar' }],
            })(
              <Select placeholder="masukkan sekolah">
                <Option value="cc">SMK</Option>
                <Option value="d">SMA</Option>
              </Select>
            )}
          </Form.Item>

          {/* <Form.Item {...formItemLayout} label="收款账户">
            <Input.Group compact>
              <Select defaultValue="alipay" style={{ width: 100 }}>
                <Option value="alipay">支付宝</Option>
                <Option value="bank">银行账户</Option>
              </Select>
              {getFieldDecorator('receiverAccount', {
                initialValue: data.receiverAccount,
                rules: [
                  { required: true, message: '请输入收款人账户' },
                  { type: 'email', message: '账户名应为邮箱格式' },
                ],
              })(<Input style={{ width: 'calc(100% - 100px)' }} placeholder="test@example.com" />)}
            </Input.Group>
          </Form.Item> */}
          {/* <Form.Item {...formItemLayout} label="收款人姓名">
            {getFieldDecorator('receiverName', {
              initialValue: data.receiverName,
              rules: [{ required: true, message: '请输入收款人姓名' }],
            })(<Input placeholder="请输入收款人姓名" />)}
          </Form.Item> */}
          {/* <Form.Item {...formItemLayout} label="转账金额">
            {getFieldDecorator('amount', {
              initialValue: data.amount,
              rules: [
                { required: true, message: '请输入转账金额' },
                {
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: '请输入合法金额数字',
                },
              ],
            })(<Input prefix="￥" placeholder="请输入金额" />)}
          </Form.Item> */}
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }}
            label=""
          >
            <Button type="primary" onClick={onValidateForm}>
              SIMPAN
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }} />
        {/* <Card title="Kompetensi Dasar" bordered={false}>
        
          {getFieldDecorator('members', {
            initialValue: tableData,
          })(<TableFormKd />)}
        </Card> */}

        {/* <div className={styles.desc}>
          <h3>说明</h3>
          <h4>转账到支付宝账户</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
          <h4>转账到银行卡</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
        </div> */}
      </Fragment>
    );
  }
}

// export default FormKdAdd;

export default TableFormKdadd;
