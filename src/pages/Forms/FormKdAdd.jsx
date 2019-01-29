import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Divider, Card } from 'antd';
import router from 'umi/router';
import styles from './style.less';
import { formatMessage, FormattedMessage } from 'umi/locale';

const { Option } = Select;
const FormItem = Form.Item;
const { TextArea } = Input;
const MyInput = ({ value }) => {
  return <input value={value} />;
};

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
class FormKdAdd extends React.PureComponent {
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
        <Card title="Tambah Kompetensi Dasar" bordered={false}>
          <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
            <Form.Item {...formItemLayout} label=" Nama Sekolah ">
              {getFieldDecorator('payAccountSSS', {
                initialValue: data.payAccountSSS,
                rules: [{ required: true, message: 'benar' }],
              })(
                <Select placeholder="masukkan sekolah">
                  <Option value="cc">SMK Sumpah Pemuda</Option>
                  <Option value="d">SMk Bakti Taruna</Option>
                  <Option value="d">SMk Wikrama Bogor</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label=" Tahun Pelajaran">
              {getFieldDecorator('payAccount', {
                initialValue: data.payAccount,
                rules: [{ required: true, message: 'BELUM TERISI' }],
              })(
                <Select placeholder="Tahun Pelajaran">
                  <Option value="aa">2016-2017</Option>
                  <Option value="ab">2017-2018</Option>
                  <Option value="ac">2019-2020</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item {...formItemLayout} label=" Mata Pelajaran">
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

            <Form.Item {...formItemLayout} label=" Kode Pengetahuan ">
              {getFieldDecorator('payAccountS', {
                initialValue: data.payAccountS,
                rules: [{ required: true, message: 'BELUM TERISI' }],
              })(
                <input
                  style={{
                    width: '32px',
                    height: '30px',
                    paddingLeft: '10px',
                    border: '1px solid #ebebeb',
                    paddingLeft: '10px',
                    fontSize: '16px',
                  }}
                  type="text"
                  readOnly
                  defaultValue="3"
                />
              )}
            </Form.Item>

            <FormItem {...formItemLayout} label={'Inti Pengetahuan'}>
              {getFieldDecorator('standard', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'validation.standard.required' }),
                  },
                ],
              })(<TextArea style={{ minHeight: 32 }} placeholder={'Ini placeholder'} rows={4} />)}
            </FormItem>

            {/* <input style={{ width: "64px", height: "36px",paddingLeft:"10px",borderRadius: "16px",
                            border: "1px solid #ebebeb",paddingLeft: "10px",fontSize: "16px" }} type="text"  readOnly defaultValue="4" /> */}

            <Form.Item {...formItemLayout} label=" Kode Keterampilan ">
              {getFieldDecorator('payAccountS', {
                initialValue: data.payAccountS,
                rules: [{ required: true, message: 'BELUM TERISI' }],
              })(
                <input
                  style={{
                    width: '32px',
                    height: '30px',
                    paddingLeft: '10px',
                    border: '1px solid #ebebeb',
                    paddingLeft: '10px',
                    fontSize: '16px',
                  }}
                  type="text"
                  readOnly
                  defaultValue="4"
                />
              )}
            </Form.Item>

            <FormItem {...formItemLayout} label={'Inti Keterampilan'}>
              {getFieldDecorator('standard', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'validation.standard.required' }),
                  },
                ],
              })(<TextArea style={{ minHeight: 32 }} placeholder={'Ini placeholder'} rows={4} />)}
            </FormItem>

            {/* <Button disabled>L</Button> */}
            {/* <Form.Item {...formItemLayout} label="Tambah Caption ">
            {getFieldDecorator('payAccountSS', {
              initialValue: data.payAccountSS,
              rules: [{ required: true, message:'BELUM TERISI' }],
            })(
              <Select placeholder="masukkan caption">
                <Option value="cc"  readonly>3.3</Option>
                <Option value="d"disabled>B</Option>
              </Select>
            )}
          </Form.Item> */}

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
        </Card>
        {/* <Divider style={{ margin: '40px 0 24px' }} /> */}
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

export default FormKdAdd;

// pilih : sekolah-
//         tp-
//         mapel-
//         kode pengetahuan =textbox
//         caption/inti pengetahuan = textarea
//         kode keterampilan =textbox
//         caption keterampilan =

//         {
// 	"caption_pengetahuan":"Main Ball",
// 	"tipe_pengetahuan":"Pengetahuan",
// 	"caption_keterampilan":"Main Ball2",
// 	"tipe_keterampilan":"Keterampilan",
// 	"tingkat_id":413,
// 	"tahun_pelajaran_id" : 2,
// 	"sekolah_id":73,
// 	"createdBy":"Anoplay2",
// 	"kode_pengetahuan" : "3.3",
// 	"kode_keterampilan" : "4.3",
// 	"id_mata_pelajaran_admin":"9462711e-9ea8-4f19-90b5-e6d21f7163c6"
// }
