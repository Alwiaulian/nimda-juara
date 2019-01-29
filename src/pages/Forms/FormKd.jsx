import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import FooterToolbar from '@/components/FooterToolbar';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import TableFormKd from './TableFormkd';
import styles from './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const fieldLabels = {
  name: 'Hapus',
  url: 'aa',
  owner: 'aaaaa',
  approver: 'aaaaaaaa',
  dateRange: 'aaazs',
  type: 'aaaaz',
  name2: 'aaaaa',
  url2: 'aaaaa',
  owner2: 'eeeeee',
  approver2: 'qqqqqq',
  dateRange2: 'zzzzz',
  type2: 'vvvvvv',
};

const tableData = [
  {
    key: '1',
    name: 'Bahasa Indonesia',
    workId: '00001',
    captionId: 'Wikrama Indo',
    tingkatId: '1',
    department: 'SMP negeri 1 Bogor',
  },
  {
    key: '2',
    workId: '00002',
    captionId: 'smp',
    name: 'Ilmu Pengetahuan Alam',
    tingkatId: '2',
    department: 'SMK YZA',
  },
  {
    key: '3',
    workId: '00003',
    captionId: 'smp',
    name: 'Matematika',
    tingkatId: '3',
    department: 'Sma 1 Bogor',
  },
  {
    key: '4',
    workId: '00004',
    captionId: 'sma',
    name: 'Bahasa sundaa',
    tingkatId: '4',
    department: 'Smk Amaliah',
  },
  {
    key: '5',
    workId: '00005',
    captionId: 'sd',
    name: 'Bahasa jepang',
    tingkatId: '5',
    department: 'Wikrama Bogor',
  },
];

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitAdvancedForm'],
}))
@Form.create()
class FormKd extends PureComponent {
  state = {
    width: '100%',
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }

  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = fieldKey => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="GAGAL SIMPAN"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle" />
        </Popover>
        {errorCount}
      </span>
    );
  };

  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
  };

  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        // submit the values
        dispatch({
          type: 'form/submitAdvancedForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      submitting,
    } = this.props;
    const { width } = this.state;

    return (
      <PageHeaderWrapper
        // title="高级表单"
        // content="高级表单常见于一次性输入和提交大批量数据的场景。"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="Kompetensi Dasar" bordered={false}>
          {getFieldDecorator('members', {
            initialValue: tableData,
          })(<TableFormKd />)}
        </Card>
        {/* <FooterToolbar style={{ width }}>
          {this.getErrorInfo()}
          <Button type="primary" onClick={this.validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar> */}
      </PageHeaderWrapper>
    );
  }
}

export default FormKd;
