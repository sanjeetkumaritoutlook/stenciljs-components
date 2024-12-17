import { FormConfig } from '../../../types/form-config';
import {
  formatDisplayInternationalNumberWithDecimal,
  formatDisplayNumberDecimal,
  formatSpecialCharacterstoUnderScore,
  formatDisplayNumberOrDecimal,
  formatDisplayPercentageOrDecimal,
  formatDisplayPercentageOrDecimalWithSpace,
  percentageFormatterWithSpace,
} from './maskingfn';
export const formSchema: FormConfig[] =  [
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Commercial / Financial Institutions',
      },
      content: `Please indicate if this is Commercial or FI policy`,
    },
    {
      label: 'Please select a business area:',
      dataPath: 'required_line_of_business',
      controlName: 'required_line_of_business',
      elementType: 'radio-group',
      verticalLayout: 'true',
      verticalAlignment: 'start',
      inlineQuestion: true,
      questionWidth: 6,

      options: [
        { value: 'Commercial', label: 'Commercial' },
        { value: 'Financial Institutions', label: 'Financial Institutions' },
      ],
      initialValue: 'Financial Institutions',
      validation: [
        {
          type: 'required',
          message: "'Please select a business area' is a required field.",
        },
      ],
    },

    // Policy Wording Selection screen for Commercial
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Policy Wording for Commercial',
      },
      content: `Complete the Active Fields for the 'Policy Wording for Commercial' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial',
    },
    {
      label: 'Policy Wording Selection:',
      dataPath: 'policy_wording_selection',
      placeholder: '(select a value)',
      controlName: 'policy_wording_selection',
      elementType: 'select',
      options: [
        { label: 'Charity Wording', value: 'Charity Wording' },
        {
          label: 'Clubs & Associations Wording',
          value: 'Clubs & Associations Wording',
        },
        {
          label: 'Directors & Officers Wording',
          value: 'Directors & Officers Wording',
        },
        {
          label: 'Employment Practices Liability Wording',
          value: 'Employment Practices Liability Wording',
        },
        {
          label: 'Pension Trustees Wording',
          value: 'Pension Trustees Wording',
        },
        { label: 'Crime Wording', value: 'Crime Wording' },
      ],
      validation: [
        {
          type: 'required',
          message: `'Policy Wording Selection' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial',
    },

    // Policy Wording Selection screen for FI
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Policy Wording for FI',
      },
      content: `Complete the Active Fields for the 'Policy Wording for FI' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions',
    },

    {
      label: 'Policy Wording Selection:',
      dataPath: 'policy_wording_selection_1',
      placeholder: '(select a value)',
      controlName: 'policy_wording_selection_1',
      elementType: 'select',
      options: [
        {
          label: 'Professional Indemnity Wording ',
          value: 'Professional Indemnity Wording',
        },
        {
          label: 'Directors & Officers Wording',
          value: 'Directors & Officers Wording',
        },
      ],
      validation: [
        {
          type: 'required',
          message: `'Policy Wording Selection' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions',
    },

    {
      label: 'Ring-Fenced Limits?',
      dataPath: 'ring_fenced_limits',
      controlName: 'ring_fenced_limits',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      disabled: true,
      initialValue: '',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
        { value: '', label: 'None' },
      ],

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions',
    },

    // GENERAL POLICY INFO SCREEN
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'General Policy Information',
      },
      content: `Please enter/change the information in the editable fields`,
    },

    {
      label: 'Assured Name:',
      dataPath: 'assured_name',
      controlName: 'assured_name',
      elementType: 'textarea',
      type: 'text',
      validation: [
        {
          type: 'required',
          message: "'Assured Name' is a required field.",
        },
      ],
    },

    {
      label: 'Assured Address:',
      dataPath: 'assured_address',
      controlName: 'assured_address',
      elementType: 'textarea',
      rows: 4,
      type: 'text',
    
      validation: [
        {
          type: 'required',
          message: "'Assured Address' is a required field.",
        },
      ],
    },

    {
      label: 'Broker Name:',
      dataPath: 'broker_name',
      controlName: 'broker_name',
      elementType: 'input',
      type: 'text',
      validation: [
        {
          type: 'required',
          message: "'Broker Name' is a required field.",
        },
      ],
    },

    {
      label: 'Policy Start Date:',
      dataPath: 'incept_date',
      controlName: 'incept_date',
      elementType: 'date',
      validation: [
        {
          type: 'required',
          message: "'Policy Start Date' is a required field.",
        },
      ],
    },

    {
      label: 'Policy Expiry Date:',
      dataPath: 'expiry_date',
      controlName: 'expiry_date',
      elementType: 'date',
      validation: [
        {
          type: 'required',
          message: "'Policy Expiry Date' is a required field.",
        },
      ],
    },

    {
      label: 'Retroactive Date:',
      dataPath: 'retroactive_date',
      controlName: 'retroactive_date',
      elementType: 'date',
    },

    {
      label: 'Premium CCY:',
      dataPath: 'premium_ccy',
      controlName: 'premium_ccy',
      elementType: 'input',
      type: 'text',
      initialValue: '',
      validation: [
        {
          type: 'required',
          message: "'Premium CCY' is a required field.",
        },
      ],
    },

    {
      label: 'Premium:',
      dataPath: 'premium',
      controlName: 'premium',
      elementType: 'input',
      type: 'text',
      initialValue: '',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Premium' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Premium' must be a 'Numeric' value.",
        },
      ],
    },
    {
      label: 'Jurisdiction:',
      dataPath: 'jurisdiction',
      controlName: 'jurisdiction',
      elementType: 'input',
      type: 'text',
      initialValue: 'Worldwide excluding USA/Canada',
      validation: [
        {
          type: 'required',
          message: "'Jurisdiction' is a required field.",
        },
      ],
    },
    // {
    //   label: 'Government Levy (%):',
    //   dataPath: 'gvmt_levy',
    //   controlName: 'gvmt_levy',
    //   elementType: 'input',
    //   type: 'text',
    //   initialValue: '5',
    //   maskingConfig: {
    //     maskingFn: (value) => !!value ? formatDisplayPercentageOrDecimalWithSpace(value) : null,
    //     blurDelay: 500,
    //   },
    //   validation: [
    //     {
    //       type: 'required',
    //       message: "'Government Levy (%) \' is a required field.'
    //     },
    //     {
    //       type: "custom",
    //       validatorFn: (value) => !!value ? value.match(/^\s*?[\s*0-9]\d*(\.\d+)?$/) : true,
    //       message: '"Government Levy (%)" must be a \'Percentage\' value.'
    //     },
    //     {
    //       type: "custom",
    //       validatorFn: (value) => !!value ? value.match(/\S/) : true,
    //       message: "'Government Levy (%)' is a required field.",
    //     },
    //   ]
    // },

    // {
    //   label: 'Gvmt Levy Amount:',
    //   dataPath: 'gvmt_levy_amount',
    //   controlName: 'gvmt_levy_amount',
    //   elementType: 'input',
    //   type: 'text',
    //   disabled: true,
    //   dynamicValue: (formValue: any) => (formValue.premium ? ((formValue.premium_ccy + ' ' +((Number(formValue.premium) * Number(formValue.gvmt_levy)) / 100).toFixed(2))) : formValue.premium_ccy)
    //   // initialValue:optionData?.premiumccy,
    // },
    //GRSAM-28382 : Implementation of Opus Enhancements - Dec 2023
    //policy number:DUACN9NN002 enabled, but disabled in 078771-013-PD
    {
      label: 'Irish Tax Rate (%):',
      dataPath: 'irish_tax_rate',
      controlName: 'irish_tax_rate',
      elementType: 'input',
      type: 'text',
      helpText: 'Enabled if only Irish Tax is present on the policy',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Irish Tax Rate (%)' must be a 'Numeric' value.",
        },
      ],
      //disable/enable logic is not clear in Opus content manager tool
      //DTL field not coming, logic based on pattern in ada files
     
    },
    // Screen updated GRSAM-22973
    {
      label: 'Total IPT:',
      dataPath: 'total_ipt',
      controlName: 'total_ipt',
      elementType: 'input',
      type: 'text',
      helpText: 'This information is pulled from the Genius record',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayInternationalNumberWithDecimal(value) : null,
        blurDelay: 500,
      },

      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Total IPT' must be a 'Numeric' value.",
        },
      ],
    },
    {
      label: 'Withholding Tax:',
      dataPath: 'ireland_withholding_tax',
      controlName: 'ireland_withholding_tax',
      elementType: 'input',
      type: 'text',
      initialValue: 0,
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value)
            ? formatDisplayInternationalNumberWithDecimal(value)
            : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Withholding Tax' must be a 'Numeric' value.",
        },
      ],
    },
    {
      label: 'Withholding Tax Description:',
      dataPath: 'withholding_tax_description',
      controlName: 'withholding_tax_description',
      elementType: 'textarea',
      rows: 3,
      initialValue: '',
      helpText:
        'Free text entry after "Withholding Tax" label to list which countries the WHT is in respect of (leave blank if not required)',
    },
    {
      label: 'Include Extended Reporting Period?',
      dataPath: 'include_erp',
      controlName: 'include_erp',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      initialValue: 'false',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      validation: [
        {
          type: 'required',
          message: "'Include Extended Reporting Period?' is a required field.",
        },
      ],
    },

    // limits and excess for charities
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - Charities',
      },
      content: `Complete the Active Fields for the 'Limits and Excess - Charities' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Limit Currency:',
      dataPath: 'charity_limit_ccy',
      controlName: 'charity_limit_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Basis of Cover for Limits:',
      dataPath: 'basis_of_cover_charity_limits',
      controlName: 'basis_of_cover_charity_limits',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Reimbursement Limit Amount:',
      dataPath: 'charity_reimbursement_limit',
      controlName: 'charity_reimbursement_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Reimbursement Limit Amount' must be a 'Numeric' value.",
        },
      ],

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Legal Liability Limit Amount:',
      dataPath: 'charity_legal_liability_limit',
      controlName: 'charity_legal_liability_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        // maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^[-+]?[0-9]\d*(\.\d+)?$/) : true,
          message: "'Legal Liability Limit Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Employment Practices Limit Amount:',
      dataPath: 'charity_employment_practices_limit',
      controlName: 'charity_employment_practices_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Employment Practices Limit Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Excess Currency:',
      dataPath: 'charity_excess_ccy',
      controlName: 'charity_excess_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Basis of Cover for Excess:',
      dataPath: 'basis_of_cover_charity_excess',
      controlName: 'basis_of_cover_charity_excess',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Reimbursement Excess Amount:',
      dataPath: 'charity_reimbursement_excess',
      controlName: 'charity_reimbursement_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Reimbursement Excess Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Legal Liability Excess Amount:',
      dataPath: 'charity_legal_liability_excess',
      controlName: 'charity_legal_liability_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Legal Liability Excess Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      label: 'Employment Practices Excess Amount:',
      dataPath: 'charity_employment_practices_excess',
      controlName: 'charity_employment_practices_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        // maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),

        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^[-+]?[0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Employment Practices Excess Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },

    {
      label: 'Acquisition Limit:',
      dataPath: 'acquisition_limit_charities',
      controlName: 'acquisition_limit_charities',
      elementType: 'input',
      type: 'text',
      initialValue: '15',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Acquisition Limit' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[0-9]\d*(\.\d+)?$/) : true,
          message: "'Acquisition Limit' must be a 'Percentage' value.",
        },
      ],
    },
    {
      label: 'Prior and Pending Litigation Date:',
      dataPath: 'prior_and_pending_litigation_date_charities',
      controlName: 'prior_and_pending_litigation_date_charities',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Charity Wording',
    },
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Extended Reporting Period - Additional Information',
      },
      content: `Complete the Active Fields for the 'Extended Reporting Period - Additional Information' group.`,
      conditionalOn: (formData: any) => formData?.include_erp === 'true',
    },

    {
      label: 'Duration (months):',
      dataPath: 'erp_duration',
      controlName: 'erp_duration',
      elementType: 'input',
      type: 'number',
      initialValue: '12',
      helpText: 'Enter the duration, in months, that applies to the ERP ',
      validation: [
        {
          type: 'required',
          message: "'Duration (months)' is a required field.",
        },
      ],
      conditionalOn: (formData: any) => formData?.include_erp === 'true',
    },
    //doubt
    {
      label: 'Additional Premium Rate:',
      dataPath: 'erp_ap_rate',
      controlName: 'erp_ap_rate',
      elementType: 'input',
      type: 'text',
      initialValue: '100',
      helpText:
        'This is the percentage of the Annual Premium to be used to calculate the AP ',
      maskingConfig: {
        // maskingFn:(value) => !!value ? formatDisplayPercentage(value) : null,
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Additional Premium Rate' is a required field.",
        },

        {
          type: 'custom',
          //  validatorFn: (value) => !!value ? value.match(/^[0-9]+$/,'$1,') : true,
          validatorFn: (value) =>
            !!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true,
          message: "'Additional Premium Rate' must be a 'Percentage' value.",
        },
      ],
      conditionalOn: (formData: any) => formData?.include_erp === 'true',
    },

    {
      label: 'Additional Premium Currency:',
      dataPath: 'erp_additional_premium_ccy',
      controlName: 'erp_additional_premium_ccy',
      elementType: 'input',
      type: 'text',
      validation: [
        {
          type: 'required',
          message: "'Additional Premium Currency' is a required field.",
        },
      ],
      conditionalOn: (formData: any) => formData?.include_erp === 'true',
    },

    {
      label: 'Additional Premium for ERP:',
      dataPath: 'erp_additional_premium',
      controlName: 'erp_additional_premium',
      elementType: 'input',
      type: 'text',
      disabled: true,
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Additional Premium for ERP' is a required field.",
        },
      ],
      conditionalOn: (formData: any) => formData?.include_erp === 'true',
    },
    //limits and excess epl
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess EPL',
      },
      content: `Complete the Active Fields for the 'Limits and Excess EPL' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Limit Currency:',
      dataPath: 'epl_limit_ccy',
      controlName: 'epl_limit_ccy',
      elementType: 'input',
      type: 'text',
      validation: [
        {
          type: 'required',
          message: `'Limit Currency' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Liability Limit:',
      dataPath: 'epl_liability_limit',
      controlName: 'epl_liability_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: `'Liability Limit' is a required field.`,
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Liability Limit' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Basis of Cover:',
      dataPath: 'basis_of_cover_epl',
      controlName: 'basis_of_cover_epl',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      validation: [
        {
          type: 'required',
          message: `'Basis of Cover' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Excess - USA/Canada:',
      dataPath: 'epl_usa_canada_excess',
      controlName: 'epl_usa_canada_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      helpText: `Zero will cause the USA/Canada Excess to be hidden on the Schedule; if shown, the amount will be displayed in USD `,
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: `'Excess - USA/Canada' is a required field.`,
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess - USA/Canada' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Rest of World Excess CCY:',
      dataPath: 'epl_row_excess_ccy',
      controlName: 'epl_row_excess_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Rest of World Excess:',
      dataPath: 'epl_rest_of_world_excess',
      controlName: 'epl_rest_of_world_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Rest of World Excess' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Excess Description:',
      dataPath: 'excess_description_epl',
      controlName: 'excess_description_epl',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      validation: [
        {
          type: 'required',
          message: `'Excess Description' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Acquisition Limit EPL:',
      dataPath: 'acquisition_limit_epl',
      controlName: 'acquisition_limit_epl',
      elementType: 'input',
      type: 'text',
      initialValue: '15',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Acquisition Limit EPL' is a required field.",
        },
        {
          type: 'custom',
          //  validatorFn: (value) => !!value ? value.match(/^[0-9]+$/,'$1,') : true,
          validatorFn: (value) =>
            !!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true,

          message: "'Acquisition Limit EPL' must be a 'Percentage' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },
    {
      label: 'Prior and Pending Litigation Date:',
      dataPath: 'prior_and_pending_litigation_date_epl',
      controlName: 'prior_and_pending_litigation_date_epl',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection ===
          'Employment Practices Liability Wording',
    },

    // Limits and Excess Charities for commercial
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - Clubs & Associations',
      },
      content: `Complete the Active Fields for the 'Limits and Excess - Clubs & Associations' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
    },

    {
      label: 'Limit Currency:',
      dataPath: 'ca_directors_officers_liability_limit_ccy',
      controlName: 'ca_directors_officers_liability_limit_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
    },

    {
      label: 'Basis of Cover for Limits:',
      dataPath: 'basis_of_cover_clubs_associations',
      controlName: 'basis_of_cover_clubs_associations',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
    },

    {
      label: 'Section 1 (D&O) Liability Amount:',
      dataPath: 'ca_directors_officers_liability_limit',
      controlName: 'ca_directors_officers_liability_limit',
      elementType: 'input',
      type: 'text',

      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Section 1 (D&O) Liability Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Section 2 (CLL) Liability Amount:',
      dataPath: 'ca_corporate_legal_liability_limit',
      controlName: 'ca_corporate_legal_liability_limit',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Section 2 (CLL) Liability Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Section 3 (EPL) Liability Amount:',
      dataPath: 'ca_employment_practices_liability_limit',
      controlName: 'ca_employment_practices_liability_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Section 3 (EPL) Liability Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Excess Currency:',
      dataPath: 'ca_directors_officers_excess_ccy',
      controlName: 'ca_directors_officers_excess_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
    },

    {
      label: 'Section 1 (D&O) Excess Amount:',
      dataPath: 'ca_directors_officers_excess',
      controlName: 'ca_directors_officers_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Section 1 (D&O) Excess Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Section 2 (CLL) Excess Amount:',
      dataPath: 'ca_corporate_legal_excess',
      controlName: 'ca_corporate_legal_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Section 2 (CLL) Excess Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Section 3 (EPL) Excess Amount:',
      dataPath: 'ca_employment_practices_excess',
      controlName: 'ca_employment_practices_excess',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Section 3 (EPL) Excess Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Acquisition Limit:',
      dataPath: 'acquisition_limit_clubs_associations',
      controlName: 'acquisition_limit_clubs_associations',
      elementType: 'input',
      type: 'text',
      initialValue: '15',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true,
          message: "'Acquisition Limit' must be a 'Percentage' value.",
        },
      ],
    },

    {
      label: 'Prior and Pending Litigation Date:',
      dataPath: 'prior_and_pending_litigation_date_clubs_associations',
      controlName: 'prior_and_pending_litigation_date_clubs_associations',
      elementType: 'date',

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Clubs & Associations Wording',
    },

    //limits and excess for pensions trustees
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - Pensions Trustees',
      },
      content: `Complete the Active Fields for the 'Limits and Excess - Pensions Trustees' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Fidelity Extension - included / not included:',
      dataPath: 'fidelity_extension',
      controlName: 'fidelity_extension',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { label: 'Yes', value: 'true' },
        { label: 'No', value: 'false' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: `'Fidelity Extension - included / not included' is a required field. `,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Civil Penalties Extension - included / not included:',
      dataPath: 'civil_penalties_extension',
      controlName: 'civil_penalties_extension',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { label: 'Yes', value: 'true' },
        { label: 'No', value: 'false' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: `'Civil Penalties Extension - included / not included' is a required field. `,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Scheme:',
      dataPath: 'scheme',
      controlName: 'scheme',
      elementType: 'textarea',
      rows: 3,

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Limit Currency:',
      dataPath: 'ptl_limit_ccy',
      controlName: 'ptl_limit_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
      validation: [
        {
          type: 'required',
          message: `'Limit Currency' is a required field.`,
        },
      ],
    },
    {
      label: 'Liability Limit:',
      dataPath: 'ptl_liability_limit',
      controlName: 'ptl_liability_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: `'Liability Limit' is a required field.`,
        },
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message: "'Liability Limit' must be a 'Numeric' value.",
        // },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Liability Basis of Cover:',
      dataPath: 'ptl_limit_basis_of_cover',
      controlName: 'ptl_limit_basis_of_cover',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      validation: [
        {
          type: 'required',
          message: `'Liability Basis of Cover' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Excess Amount (USA/Canada):',
      dataPath: 'ptl_excess_amount_us',
      controlName: 'ptl_excess_amount_us',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      helpText: `Zero will cause the USA/Canada Excess to be hidden on the Schedule; if shown, the amount will be displayed in USD `,
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: `'Excess Amount (USA/Canada)' is a required field.`,
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess Amount (USA/Canada)' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Excess Description - USA/Canada:',
      dataPath: 'ptl_excess_description_us',
      controlName: 'ptl_excess_description_us',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Excess Currency ROW:',
      dataPath: 'ptl_excess_ccy_row',
      controlName: 'ptl_excess_ccy_row',
      elementType: 'input',
      type: 'text',

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Excess Amount ROW:',
      dataPath: 'ptl_excess_amt_row',
      controlName: 'ptl_excess_amt_row',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      validation: [
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message: "'Excess Amount ROW' must be a 'Numeric' value.",
        // },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Excess Description ROW:',
      dataPath: 'ptl_excess_description_row',
      controlName: 'ptl_excess_description_row',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Acquisition Limit - consolidated assets of the Policyholder:',
      dataPath: 'policyholder_acquisition_limit',
      controlName: 'policyholder_acquisition_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '20',
      helpText: 'If left blank, Nil will be displayed on the schedule. ',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimalWithSpace(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message:
            "'Acquisition Limit - consolidated assets of the Policyholder' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Acquisition Limit - consolidated assets of the Policyholder' must be a 'Percentage' value.",
        },
        {
          type: 'custom',
          validatorFn: (value) => (!!value ? value.match(/\S/) : true),
          message:
            "'Acquisition Limit - consolidated assets of the Policyholder' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Acquisition Limit - members of the Scheme:',
      dataPath: 'members_acquisition_limit',
      controlName: 'members_acquisition_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '20',
      helpText: 'If left blank, Nil will be displayed on the schedule. ',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimalWithSpace(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message:
            "'Acquisition Limit - members of the Scheme' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Acquisition Limit - members of the Scheme' must be a 'Percentage' value.",
        },
        {
          type: 'custom',
          validatorFn: (value) => (!!value ? value.match(/\S/) : true),
          message:
            "'Acquisition Limit - members of the Scheme' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Pollution Defence Costs Currency:',
      dataPath: 'pollution_defence_costs_ccy',
      controlName: 'pollution_defence_costs_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Pollution Defecnce Costs Limit:',
      dataPath: 'pollution_defence_costs_limit',
      controlName: 'pollution_defence_costs_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '250000',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Pollution Defence Costs Limit' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Pollution Defence Basis of Cover 1:',
      dataPath: 'pollution_defence_basis_of_cover',
      controlName: 'pollution_defence_basis_of_cover',
      elementType: 'combo-box',
      placeholder: '(select or type a value)',
      allowCustomInput: true,
      allowCancel: true,
      options: [
        { label: 'in the Aggregate', value: 'in the Aggregate' },
        { label: 'Any One Loss', value: 'Any One Loss' },
      ],
      initialValue: 'in the Aggregate',
      helpText: `Select the basis from the drop down or manually enter the cover `,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    //civil penalties          label: 'Civil Penalties Extension - included / not included:',

    {
      label: 'Civil Penalties Additional Currency:',
      controlName: 'civil_penalties_additional_ccy',
      dataPath: 'civil_penalties_additional_ccy',
      elementType: 'input',
      type: 'text',
   
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.civil_penalties_extension === 'false',
        };
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Civil Penalties Additional Premium:',
      controlName: 'civil_penalties_additional_premium',
      dataPath: 'civil_penalties_additional_premium',
      elementType: 'input',
      type: 'text',
      // disabled: true,
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.civil_penalties_extension === 'false',
        };
      },
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      validation: [
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message:
        //     "'Civil Penalties Additional Premium' must be a 'Numeric' value.",
        // },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Civil Penalties Sub Limit Currency:',
      controlName: 'civil_penalties_sub_limit_ccy',
      dataPath: 'civil_penalties_sub_limit_ccy',
      elementType: 'input',
      type: 'text',
      // disabled: true,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.civil_penalties_extension === 'false',
        };
      },
    },
    {
      label: 'Civil Penalties Sub Limit Premium:',
      controlName: 'civil_penalties_sub_limit_premium',
      dataPath: 'civil_penalties_sub_limit_premium',
      elementType: 'input',
      type: 'text',
      // disabled: true,
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.civil_penalties_extension === 'false',
        };
      },
      validation: [
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message:
        //     "'Civil Penalties Sub Limit Premium' must be a 'Numeric' value.",
        // },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Civil Limit Basis of Cover:',
      dataPath: 'civil_limit_basis_of_cover',
      controlName: 'civil_limit_basis_of_cover',
      elementType: 'combo-box',
      placeholder: '(select or type a value)',
      allowCustomInput: true,
      allowCancel: true,
      options: [
        { label: 'in the Aggregate', value: 'in the Aggregate' },
        { label: 'Any One Loss', value: 'Any One Loss' },
      ],
      initialValue: 'in the Aggregate',
      helpText: `Select the basis from the drop down or manually enter the cover `,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    {
      label: 'Prior and Pending Litigation Date:',
      dataPath: 'prior_and_pending_litigation_date_ptl',
      controlName: 'prior_and_pending_litigation_date_ptl',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Pension Trustees Wording',
    },
    //limits and excess for crime
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - Crime',
      },
      content: `Complete the Active Fields for the 'Limits and Excess - Crime' group.`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Limit of Liability Currency:',
      dataPath: 'limit_of_liability_ccy_crime',
      controlName: 'limit_of_liability_ccy_crime',
      elementType: 'input',
      type: 'text',

      validation: [
        {
          type: 'required',
          message: `'Limit of Liability Currency' is a required field.`,
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Limit of Liability Amount:',
      dataPath: 'limit_of_liability_amount_crime',
      controlName: 'limit_of_liability_amount_crime',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: `'Limit of Liability Amount' is a required field.`,
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Limit of Liability Amount' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Basis of Cover:',
      dataPath: 'basis_of_cover_crime',
      controlName: 'basis_of_cover_crime',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Data Reproduction Expenses Sub-Limit:',
      dataPath: 'data_reproduction_expenses_sub_limit_crime',
      controlName: 'data_reproduction_expenses_sub_limit_crime',
      elementType: 'input',
      type: 'text',
      helpText: `Leave blank or enter zero to hide on the Schedule `,
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Data Reproduction Expenses Sub-Limit' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Basis of Cover:',
      dataPath: 'basis_of_cover_dr_crime',
      controlName: 'basis_of_cover_dr_crime',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Excess Currency:',
      dataPath: 'excess_ccy_crime',
      controlName: 'excess_ccy_crime',
      elementType: 'input',
      type: 'text',

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Excess:',
      dataPath: 'excess_amount_crime',
      controlName: 'excess_amount_crime',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Excess Description:',
      dataPath: 'excess_description_crime',
      controlName: 'excess_description_crime',
      elementType: 'input',
      type: 'text',
      initialValue: `each and every claim`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Excess US / Canada:',
      dataPath: 'excess_amount_crime_us_canada',
      controlName: 'excess_amount_crime_us_canada',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess US / Canada' must be a 'Numeric' value.",
        },
      ],
      helpText: 'Leave blank or enter zero to hide on the Schedule',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },
    {
      label: 'Excess Description US / Canada:',
      dataPath: 'excess_description_crime_us_canada',
      controlName: 'excess_description_crime_us_canada',
      elementType: 'input',
      type: 'text',
      initialValue: `each and every claim`,

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Commercial' &&
        formData?.policy_wording_selection === 'Crime Wording',
    },

    //  Limits and Excess for FI
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - PI',
      },
      content: `Review/enter Limits and Excess information `,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: ' Non Ring-fenced Limit Currency:',
      dataPath: 'limit_non_ringfenced_ccy',
      controlName: 'limit_non_ringfenced_ccy',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'true',
        };
      },
      validation: [
        {
          type: 'required',
          message: "'Non Ring-fenced Limit Currency' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Non Ring-fenced Limit:',
      dataPath: 'limit_non_ringfenced',
      controlName: 'limit_non_ringfenced',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'true',
        };
      },
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Non Ring-fenced Limit' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Non Ring-fenced Limit' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: ' Basis of Cover:',
      dataPath: 'basis_of_cover',
      controlName: 'basis_of_cover',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      validation: [
        {
          type: 'required',
          message: "'Basis of Cover' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Include Ring-Fenced Limit 1?',
      dataPath: 'include_ringfenced_limit_1',
      controlName: 'include_ringfenced_limit_1',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      initialValue: 'false',
      // disabled: false,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'required',
          message: "'Include Ring-Fenced Limit 1?' is a required field.",
        },
      ],
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
    },

    {
      label: 'Ring-Fenced Limit 1 Currency:',
      dataPath: 'limit_ringfenced_ccy_1',
      controlName: 'limit_ringfenced_ccy_1',
      elementType: 'input',

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_1 === 'false',
        };
      },
    },

    {
      label: 'Ring-Fenced Limit 1:',
      dataPath: 'limit_ringfenced_1',
      controlName: 'limit_ringfenced_1',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_1 === 'false',
        };
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Ring-Fenced Limit 1' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 1 - Additional Text:',
      dataPath: 'rf_limit_basis_of_cover_additional_text_1',
      controlName: 'rf_limit_basis_of_cover_additional_text_1',
      elementType: 'textarea',
      rows: 4,
      initialValue: `in respect of the Insured’s registration as an Insurance, Reinsurance or Ancillary Insurance Intermediary under the European Union (Insurance Distribution) Regulations, 2018; and separately`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_1 === 'false',
        };
      },
    },

    {
      label: 'Include Ring-Fenced Limit 2?',
      dataPath: 'include_ringfenced_limit_2',
      controlName: 'include_ringfenced_limit_2',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      initialValue: 'false',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'required',
          message: "'Include Ring-Fenced Limit 2?' is a required field.",
        },
      ],
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
    },

    {
      label: 'Ring-Fenced Limit 2 Currency:',
      dataPath: 'limit_ringfenced_ccy_2',
      controlName: 'limit_ringfenced_ccy_2',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_2 === 'false',
        };
      },
    },

    {
      label: 'Ring-Fenced Limit 2:',
      dataPath: 'limit_ringfenced_2',
      controlName: 'limit_ringfenced_2',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Ring-Fenced Limit 2' must be a 'Numeric' value.",
        },
      ],
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_2 === 'false',
        };
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 2 - Additional Text:',
      dataPath: 'rf_limit_basis_of_cover_additional_text_2',
      controlName: 'rf_limit_basis_of_cover_additional_text_2',
      elementType: 'textarea',
      rows: 4,
      initialValue: `in respect of the Insured’s authorisations as an Investment Business Firm and an Investment Product Intermediary under the Investment Intermediaries Act, 1995 (as amended); and separately`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_2 === 'false',
        };
      },
    },

    {
      label: 'Include Ring-Fenced Limit 3?',
      dataPath: 'include_ringfenced_limit_3',
      controlName: 'include_ringfenced_limit_3',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      initialValue: 'false',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'required',
          message: "'Include Ring-Fenced Limit 3?' is a required field.",
        },
      ],
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
    },

    {
      label: 'Ring-Fenced Limit 3 Currency:',
      dataPath: 'limit_ringfenced_ccy_3',
      controlName: 'limit_ringfenced_ccy_3',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_3 === 'false',
        };
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 3:',
      dataPath: 'limit_ringfenced_3',
      controlName: 'limit_ringfenced_3',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_3 === 'false',
        };
      },
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Ring-Fenced Limit 3' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 3 - Additional Text:',
      dataPath: 'rf_limit_basis_of_cover_additional_text_3',
      controlName: 'rf_limit_basis_of_cover_additional_text_3',
      elementType: 'textarea',
      rows: 4,
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_3 === 'false',
        };
      },
      initialValue: `in respect of the Insured’s authorisation under Part V of the Central Bank Act, 1997 (as amended by the Central Bank (Supervision and Enforcement) Act, 2013) for the provision of debt management services; and separately`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Include Ring-Fenced Limit 4?',
      dataPath: 'include_ringfenced_limit_4',
      controlName: 'include_ringfenced_limit_4',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      initialValue: 'false',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'required',
          message: "'Include Ring-Fenced Limit 4?' is a required field.",
        },
      ],
    },

    {
      label: 'Ring-Fenced Limit 4 Currency:',
      dataPath: 'limit_ringfenced_ccy_4',
      controlName: 'limit_ringfenced_ccy_4',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_4 === 'false',
        };
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 4:',
      dataPath: 'limit_ringfenced_4',
      controlName: 'limit_ringfenced_4',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_4 === 'false',
        };
      },
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Ring-Fenced Limit 4' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 4 - Additional Text:',
      dataPath: 'rf_limit_basis_of_cover_additional_text_4',
      controlName: 'rf_limit_basis_of_cover_additional_text_4',
      elementType: 'textarea',
      rows: 4,
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.ring_fenced_limits === 'false' ||
            formData?.include_ringfenced_limit_4 === 'false',
        };
      },
      initialValue: `in respect of the Insured’s authorisations as Mortgage Credit Intermediaries/Mortgage Intermediaries pursuant to Section 31(10) of the European Union (Consumer Mortgage Credit Agreements) Regulations 2016 and Section 151A (1) of the Consumer Credit Act 1995; and separately`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 5 Currency:',
      dataPath: 'limit_ringfenced_ccy_5',
      controlName: 'limit_ringfenced_ccy_5',
      elementType: 'input',
      type: 'text',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 5:',
      dataPath: 'limit_ringfenced_5',
      controlName: 'limit_ringfenced_5',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) => formatDisplayNumberOrDecimal(value),
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Ring-Fenced Limit 5' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Ring-Fenced Limit 5 - Additional Text:',
      dataPath: 'rf_limit_basis_of_cover_additional_text_5',
      controlName: 'rf_limit_basis_of_cover_additional_text_5',
      elementType: 'textarea',
      rows: 4,
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.ring_fenced_limits === 'false',
        };
      },
      initialValue: `for all of the Insured’s other business activities`,
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Acquisition Limit:',
      dataPath: 'acquisition_limit',
      controlName: 'acquisition_limit',
      elementType: 'input',
      type: 'text',
      initialValue: '15',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Acquisition Limit' is a required field.",
        },
        //{
        //   type: "custom",
        //   //  validatorFn: (value) => !!value ? value.match(/^[0-9]+$/,'$1,') : true,
        //   validatorFn: (value) => !!value ? value[0].match(/^[0-9]\d*(\.\d+)?\%?$/) : true,

        //   message: '"Acquisition Limit" must be a \'Percentage\' value."
        // }
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Acquisition Limit' must be a 'Percentage' value.",
        },
        {
          type: 'custom',
          validatorFn: (value) => (!!value ? value.match(/\S/) : true),
          message: "'Acquisition Limit' is a required field.",
        },
      ],
    },

    {
      label: 'Mitigation Costs Sub-limit Currency:',
      dataPath: 'mitigation_costs_sublimit_ccy',
      controlName: 'mitigation_costs_sublimit_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Mitigation Costs Sub-limit Amount:',
      dataPath: 'mitigation_costs_sublimit',
      controlName: 'mitigation_costs_sublimit',
      elementType: 'input',
      type: 'text',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Mitigation Costs Sub-limit Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Excess Amount (USA/Canada):',
      dataPath: 'excess_amount_us',
      controlName: 'excess_amount_us',
      elementType: 'input',
      initialValue: '0',
      type: 'text',
      helpText:
        'Zero will cause the USA/Canada Excess to be hidden on the Schedule; if shown, the amount will be displayed in USD',
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Excess Amount (USA/Canada)' is a required field.",
        },
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message: "'Excess Amount (USA/Canada)' must be a 'Numeric' value.",
        // },
      ],
    },

    {
      label: 'Excess Description (USA/Canada):',
      dataPath: 'excess_description_us',
      controlName: 'excess_description_us',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      helpText:
        'This will be hidden from the Schedule if Excess amount is zero ',
      //  maskingConfig: {
      //   maskingFn: (value) => formatDisplayNumberOrDecimal(value),
      //   blurDelay: 500
      // },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      //  validation: [{
      //                       type: "custom",
      //                        validatorFn: (value) => !!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true,
      //                       message: ' "Excess Description (USA/Canada)" must be a \'Numeric\' value."
      //                     }]
    },

    {
      label: 'Excess Currency (Rest of World):',
      dataPath: 'excess_ccy_row',
      controlName: 'excess_ccy_row',
      elementType: 'input',
      type: 'text',

      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
    },

    {
      label: 'Excess Amount (Rest of World):',
      dataPath: 'excess_amount_row',
      controlName: 'excess_amount_row',
      elementType: 'input',
      type: 'text',
      helpText: 'Leave blank to show N/A on the Schedule or zero to show Nil ',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess Amount (Rest of World)' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'Excess Description (Rest of World):',
      dataPath: 'excess_description_row',
      controlName: 'excess_description_row',
      elementType: 'input',
      initialValue: 'each and every claim',
      helpText:
        'If Excess Amount is zero or blank, this description will be hidden ',
      type: 'text',
      //  maskingConfig: {
      //   maskingFn: (value) => formatDisplayNumberOrDecimal(value),
      //   blurDelay: 500
      // },
      conditionalOn: (formData: any) =>
        formData?.required_line_of_business === 'Financial Institutions' &&
        formData?.policy_wording_selection_1 ===
          'Professional Indemnity Wording',
      //  validation: [{
      //                       type: "custom",
      //                        validatorFn: (value) => !!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true,
      //                       message: ' "Excess Description (Rest of World)" must be a \'Numeric\' value.'
      //                     }]
    },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Limits and Excess - D&O',
      },
      content: `Complete the Active Fields for the 'Limits and Excess - D&O' group.`,
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },

    {
      label: 'Limit of Liability Currency:',
      dataPath: 'limit_of_liability_ccy_do',
      controlName: 'limit_of_liability_ccy_do',
      elementType: 'input',
      type: 'text',
      helpText: `This currency will apply to all Limits on the Schedule `,
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      validation: [
        {
          type: 'required',
          message: "'Limit of Liability Currency' is a required field.",
        },
      ],
    },

    {
      label: 'Limit of Liability Amount:',
      dataPath: 'limit_of_liability_amount_do',
      controlName: 'limit_of_liability_amount_do',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Limit of Liability Amount' must be a 'Numeric' value.",
        },
        {
          type: 'required',
          message: "'Limit of Liability Amount' is a required field.",
        },
      ],
    },

    {
      label: 'Basis of Cover:',
      dataPath: 'basis_of_cover_do',
      controlName: 'basis_of_cover_do',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim and in the annual aggregate',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      validation: [
        {
          type: 'required',
          message: "'Basis of Cover' is a required field.",
        },
      ],
    },

    {
      label: 'Excess Currency:',
      dataPath: 'excess_ccy_do',
      controlName: 'excess_ccy_do',
      elementType: 'input',
      type: 'text',
      helpText:
        'This currency will apply to all Excesses except USA/Canada, which will default to USD on the Schedule ',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      validation: [
        {
          type: 'required',
          message: "'Excess Currency' is a required field.",
        },
      ],
    },
    //didnt display
    {
      label: 'Excess - Individual Amount:',
      dataPath: 'excess_amount_do_individual',
      controlName: 'excess_amount_do_individual',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Excess - Individual Amount' must be a 'Numeric' value.",
        },
      ],
    },
    //didnt display

    {
      label: 'Excess - Individual Description:',
      dataPath: 'excess_description_do_individual',
      controlName: 'excess_description_do_individual',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },
    //didnt display

    {
      label: 'Excess - Company Reimbursement (USA/Canada) Amount:',
      dataPath: 'excess_amount_do_company_us_canada',
      controlName: 'excess_amount_do_company_us_canada',
      elementType: 'input',
      type: 'text',
      // initialValue: '0',
      helpText:
        'Zero will cause the USA/Canada Excess to be hidden on the Schedule; if shown, the amount will be displayed in USD ',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      validation: [
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message:
        //     "'Excess - Company Reimbursement (USA/Canada) Amount' must be a 'Numeric' value.",
        // },
        {
          type: 'required',
          message:
            "'Excess - Company Reimbursement (USA/Canada) Amount' is a required field.",
        },
      ],
    },
    //didnt display

    {
      label: 'Excess - Company Reimbursement (USA/Canada) Description:',
      dataPath: 'excess_description_do_company_us_canada',
      controlName: 'excess_description_do_company_us_canada',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      validation: [
        {
          type: 'required',
          message:
            "'Excess - Company Reimbursement (USA/Canada) Description' is a required field.",
        },
      ],
    },

    {
      label: 'Excess - Company Reimbursement (RoW) Amount:',
      dataPath: 'excess_amount_do_company_row',
      controlName: 'excess_amount_do_company_row',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      blurDelay: 500,
      validation: [
        {
          type: 'required',
          message:
            "'Excess - Company Reimbursement (RoW) Amount' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Excess - Company Reimbursement (RoW) Amount' must be a 'Numeric' value.",
        },
      ],
    },
    //didnt display

    {
      label: 'Excess - Company Reimbursement (RoW) Description:',
      dataPath: 'excess_description_do_company_row',
      controlName: 'excess_description_do_company_row',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },
    //GRSAM-26192 : Enhancement Request to enable Securities field in FI D&O also, different from Opus
    {
      label: 'Excess - Securities (USA/Canada) Amount:',
      dataPath: 'excess_amount_do_securities_us_canada',
      controlName: 'excess_amount_do_securities_us_canada',
      elementType: 'input',
      type: 'text',
      // initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
          validation:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? [
                  {
                    type: 'required',
                    message:
                      "'Excess - Securities (USA/Canada) Amount' is a required field.",
                  },
                  {
                    type: 'custom',
                    validatorFn: (value) =>
                      !!value
                        ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
                        : true,
                    message:
                      "'Excess - Securities (USA/Canada) Amount' must be a 'Numeric' value.",
                  },
                ]
              : [],
        };
      },

      helpText:
        'Zero will cause the USA/Canada Excess to be hidden on the Schedule; if shown, the amount will be displayed in USD ',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },
    {
      label: 'Excess - Securities (USA/Canada) Description:',
      dataPath: 'excess_description_do_securities_us_canada',
      controlName: 'excess_description_do_securities_us_canada',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
        };
      },
      // validation: [

      //   {
      //     type: 'required',
      //     message: "'Excess - Securities (USA/Canada) Description' is a required field."
      //   }
      // ]
    },

    {
      label: 'Excess - Securities (RoW) Amount:',
      dataPath: 'excess_amount_do_securities_row',
      controlName: 'excess_amount_do_securities_row',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      // maskingFn:(value) => !!value ? formatDisplayNumberOrDecimal(value) : null,
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
          validation:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? [
                  {
                    type: 'required',
                    message:
                      "'Excess - Securities (RoW) Amount' is a required field.",
                  },
                ]
              : [],
        };
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'Excess - Securities (RoW) Amount' must be a 'Numeric' value.",
        },
        // {
        //   type: 'required',
        //   message: "'Excess - Securities (RoW) Amount' is a required field."
        // }
      ],
    },
    {
      label: 'Excess - Securities (RoW) Description:',
      dataPath: 'excess_description_do_securities_row',
      controlName: 'excess_description_do_securities_row',
      elementType: 'input',
      type: 'text',
      initialValue: 'each and every claim',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
        };
      },
    },

    {
      label: 'Excess Side A Limit of Liability Amount:',
      dataPath: 'excess_side_a_limit_of_liability_amount',
      controlName: 'excess_side_a_limit_of_liability_amount',
      elementType: 'input',
      type: 'text',
      helpText:
        'Zero will cause the Excess Side A section to be displayed as Nil on the Schedule ',
      initialValue: '0',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!String(value) ? formatDisplayNumberOrDecimal(String(value)) : null,
        blurDelay: 500,
      },
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
        };
      },
      validation: [
        {
          type: 'required',
          message:
            "'Excess Side A Limit of Liability Amount' is a required field.",
        },
        // {
        //   type: 'custom',
        //   validatorFn: (value) =>
        //     !!value
        //       ? String(value).match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/)
        //       : true,
        //   message:
        //     "'Excess Side A Limit of Liability Amount' must be a 'Numeric' value.",
        // },
      ],
    },

    {
      label: 'Excess Side A Limit of Liability Description:',
      dataPath: 'excess_side_a_limit_of_liability_description',
      controlName: 'excess_side_a_limit_of_liability_description',
      elementType: 'input',
      type: 'text',
      initialValue: 'in the aggregate',
      dynamicConfig: (formData) => {
        return {
          disabled:
            (formData?.required_line_of_business === 'Commercial' &&
              formData?.policy_wording_selection ===
                'Directors & Officers Wording') ||
            (formData?.required_line_of_business === 'Financial Institutions' &&
              formData?.policy_wording_selection_1 ===
                'Directors & Officers Wording')
              ? false
              : true,
        };
      },
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },

    {
      label: 'Acquisition Limit:',
      dataPath: 'acquisition_limit_do',
      controlName: 'acquisition_limit_do',
      elementType: 'input',
      type: 'text',
      initialValue: '15',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayPercentageOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'custom',
          //  validatorFn: (value) => !!value ? value.match(/^[0-9]+$/,'$1,') : true,
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[0-9]\d*(\.\d+)?$/) : true,
          message: "'Acquisition Limit' must be a 'Percentage' value.",
        },
        {
          type: 'required',
          message: "'Acquisition Limit' is a required field.",
        },
      ],
    },

    {
      label: 'NED Excess Limit - Board Aggregate Amount:',
      dataPath: 'non_executive_director_excess_limit_board',
      controlName: 'non_executive_director_excess_limit_board',
      elementType: 'input',
      type: 'text',
      initialValue: '0',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message:
            "'NED Excess Limit - Board Aggregate Amount' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'NED Excess Limit - Board Aggregate Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'NED Excess Limit - Individual Amount:',
      dataPath: 'non_executive_director_excess_limit_ind',
      controlName: 'non_executive_director_excess_limit_ind',
      elementType: 'input',
      type: 'text',
      helpText: 'Section will be hidden if value is left as 0. ',
      initialValue: '0',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message:
            "'NED Excess Limit - Individual Amount' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message:
            "'NED Excess Limit - Individual Amount' must be a 'Numeric' value.",
        },
      ],
    },

    {
      label: 'NED Excess Limit - Board Aggregate - Basis of Cover:',
      dataPath: 'non_executive_director_excess_limit_desc',
      controlName: 'non_executive_director_excess_limit_desc',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },

    {
      label: 'Prior and Pending Litigation Date:',
      dataPath: 'prior_and_pending_litigation_date_do',
      controlName: 'prior_and_pending_litigation_date_do',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        (formData?.required_line_of_business === 'Financial Institutions' ||
          formData?.required_line_of_business === 'Commercial') &&
        (formData?.policy_wording_selection_1 ===
          'Directors & Officers Wording' ||
          formData?.policy_wording_selection ===
            'Directors & Officers Wording'),
    },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Endorsements',
      },
      content: `Complete the Active Fields for the 'Endorsements' group.`,
    },

    {
      label: 'Additional Insured Endorsement:',
      controlName: 'additional_insured',
      dataPath: 'additional_insured',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        {
          value: 'true',
          label: 'Yes',
        },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "' Additional Insured Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Alternative Investment Fund Managers Directive Endorsement:',
      controlName: 'alternative_investment_fund_managers_directive_endorsement',
      dataPath: 'alternative_investment_fund_managers_directive_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'Alternative Investment Fund Managers Directive Endorsement'  is a required field.",
        },
      ],
    },
    {
      label: 'Amendment to Professional Services Exclusion:',
      controlName: 'amendment_to_professional_services_exclusion',
      dataPath: 'amendment_to_professional_services_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "' Amendment to Professional Services Exclusion'  is a required field.",
        },
      ],
    },

    {
      label: 'Any One Claim Limit Endorsement:',
      controlName: 'aoc_limit',
      dataPath: 'aoc_limit',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "' Any One Claim Limit Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Co Insurance Agreement Endorsement:',
      controlName: 'co_insurance_agreement',
      dataPath: 'co_insurance_agreement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Co Insurance Agreement Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Cyber Risks Affirmation Endorsement - FI PI:',
      dataPath: 'cyber_risks_affirmation_endorsement_fi_pi',
      controlName: 'cyber_risks_affirmation_endorsement_fi_pi',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.policy_wording_selection_1 ===
              'Professional Indemnity Wording' &&
            formData?.required_line_of_business === 'Financial Institutions'
              ? false
              : true,
        };
      },
      validation: [
        {
          type: 'required',
          message:
            " 'Cyber Risks Affirmation Endorsement - FI PI'  is a required field.",
        },
      ],
    },

    {
      label:
        'Cyber Risks Affirmation_Endorsement - All wordings (excl Crime and FI PI):',
      dataPath:
        'cyber_risks_affirmation_endorsement_all_wordings_excl_crime_and_fi_pi',
      controlName:
        'cyber_risks_affirmation_endorsement_all_wordings_excl_crime_and_fi_pi',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      dynamicConfig: (formData) => {
        return {
          disabled:
            formData?.policy_wording_selection ===
              'Employment Practices Liability Wording' ||
            (formData?.policy_wording_selection ===
              'Pension Trustees Wording' &&
              formData?.required_line_of_business === 'Commercial')
              ? false
              : true,
        };
      },
      validation: [
        {
          type: 'required',
          message:
            " 'Cyber Risks Affirmation_Endorsement - All wordings (excl Crime and FI PI)'  is a required field.",
        },
      ],
    },

    {
      label: 'Cyber Risks Affirmation Endorsement - Crime:',
      dataPath: 'cyber_risks_affirmation_endorsement_crime',
      controlName: 'cyber_risks_affirmation_endorsement_crime',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      dynamicConfig: (formData) => {
        return {
          disabled: formData?.policy_wording_selection != 'Crime Wording',
        };
      },
      validation: [
        {
          type: 'required',
          message:
            " 'Cyber Risks Affirmation Endorsement - Crime'  is a required field.",
        },
      ],
    },
    {
      label: 'Failure To Maintain Insurance Endorsement:',
      controlName: 'failure_to_maintain_insurance',
      dataPath: 'failure_to_maintain_insurance',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            " 'Failure To Maintain Insurance Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Government of Ireland Exclusion Endorsement:',
      controlName: 'government_of_ireland_exclusion',
      dataPath: 'government_of_ireland_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            " 'Government of Ireland Exclusion Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Payments and Gratuities Endorsement:',
      controlName: 'payments_and_gratuities_endorsement',
      dataPath: 'payments_and_gratuities_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'Payments and Gratuities Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'PI Exclusion with Failure to Supervise Carveback:',
      controlName: 'pi_exclusion_with_failure_to_supervise_carveback',
      dataPath: 'pi_exclusion_with_failure_to_supervise_carveback',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'PI Exclusion with Failure to Supervise Carveback'  is a required field.",
        },
      ],
    },

    {
      label: 'Prior and Pending Litigation Exclusion:',
      controlName: 'prior_and_pending_litigation_exclusion',
      dataPath: 'prior_and_pending_litigation_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'Prior and Pending Litigation Exclusion'  is a required field.",
        },
      ],
    },

    {
      label: 'PTL Inclusion of Cover for Corporate Trustee Endorsement:',
      controlName: 'ptl_inclusion_of_cover_for_corporate_trustee',
      dataPath: 'ptl_inclusion_of_cover_for_corporate_trustee',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'PTL Inclusion of Cover for Corporate Trustee Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Retired Directors Extension Endorsement:',
      controlName: 'retired_directors_extension',
      dataPath: 'retired_directors_extension',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'Retired Directors Extension Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Ransomware Exclusion:',
      controlName: 'ransomware_exclusion',
      dataPath: 'ransomware_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      // disabled: true,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Ransomware Exclusion'  is a required field.",
        },
      ],
    },

    {
      label: 'Retroactive Date Endorsement:',
      controlName: 'retroactive_date_endorsement',
      dataPath: 'retroactive_date_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Retroactive Date Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Ring Fenced Limits Endorsement:',
      controlName: 'ring_fenced_limits_endorsement',
      dataPath: 'ring_fenced_limits_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Ring Fenced Limits Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Run Off Endorsement:',
      controlName: 'run_off_endorsement',
      dataPath: 'run_off_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Run Off Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Social Engineering Exclusion:',
      controlName: 'social_engineering_exclusion',
      dataPath: 'social_engineering_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Social Engineering Exclusion'  is a required field.",
        },
      ],
    },

    {
      label: 'Specific Investment Products Exclusion:',
      controlName: 'specific_investment_products_exclusion',
      dataPath: 'specific_investment_products_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message:
            "'Specific Investment Products Exclusion'  is a required field.",
        },
      ],
    },

    {
      label: 'Specific Matters Exclusion:',
      controlName: 'specific_matters_exclusion',
      dataPath: 'specific_matters_exclusion',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Specific Matters Exclusion'  is a required field.",
        },
      ],
    },
    {
      label: 'Subsidiary Company Extension:',
      controlName: 'subsidiary_company_extension',
      dataPath: 'subsidiary_company_extension',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Subsidiary Company Extension'  is a required field.",
        },
      ],
    },
    //GRSAM-28670 : Opus Update in Dec 2023
    {
      label: 'Territorial Exclusion Endorsement:',
      controlName: 'territorial_exclusion_endorsement',
      dataPath: 'territorial_exclusion_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Territorial Exclusion Endorsement'  is a required field.",
        },
      ],
    },

    {
      label: 'Tie In Limits Endorsement:',
      controlName: 'tie_in_limits_endorsement',
      dataPath: 'tie_in_limits_endorsement',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Tie In Limits Endorsement'  is a required field.",
        },
      ],
    },
    //part of Standardization, used same dataPath of  first manuscrip tradio button from opus wizard
    {
      label: 'Manuscript Endorsement:',
      controlName: 'manuscript_endorsement_1',
      dataPath: 'manuscript_endorsement_1',
      elementType: 'radio-group',
      inlineQuestion: true,
      questionWidth: 9,
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
      initialValue: 'false',
      validation: [
        {
          type: 'required',
          message: "'Manuscript Endorsement 1'  is a required field.",
        },
      ],
    },
    // {
    //   label: "Manuscript Endorsement 2:",
    //   controlName: "manuscript_endorsement_2",
    //   dataPath: "manuscript_endorsement_2",
    //   elementType: 'radio-group',

    //   options: [
    //     {value: "true",label: "Yes"},
    //     {value: "false",label: "No"}
    //   ],
    //   initialValue: "false",
    //   validation: [
    //     {
    //       type: "required",
    //       message: " \' Manuscript Endorsement 2 \'  is a required field."
    //     }]
    // },

    // {
    //   label: "Manuscript Endorsement 3:",
    //   controlName: "manuscript_endorsement_3",
    //   dataPath: "manuscript_endorsement_3",
    //   elementType: 'radio-group',
    //    options: [
    //     {value: "true",label: "Yes"},
    //     {value: "false",label: "No"}
    //   ],
    //   initialValue: "false",
    //   validation: [
    //     {
    //       type: "required",
    //       message: " \' Manuscript Endorsement 3 \'  is a required field."
    //     }]
    // },

    // {
    //   label: "Manuscript Endorsement 4:",
    //   controlName: "manuscript_endorsement_4",
    //   dataPath: "manuscript_endorsement_4",
    //   elementType: 'radio-group',
    //    options: [
    //     {value: "true",label: "Yes"},
    //     {value: "false",label: "No"}
    //   ],
    //   initialValue: "false",
    //   validation: [
    //     {
    //       type: "required",
    //       message: " \' Manuscript Endorsement 4 \'  is a required field."
    //     }]
    // },

    // {
    //   label: "Manuscript Endorsement 5:",
    //   controlName: "manuscript_endorsement_5",
    //   dataPath: "manuscript_endorsement_5",
    //   elementType: 'radio-group',
    //    options: [
    //     {value: "true",label: "Yes"},
    //     {value: "false",label: "No"}
    //   ],
    //   initialValue: "false",
    //   validation: [
    //     {
    //       type: "required",
    //       message: " \' Manuscript Endorsement 5 \'  is a required field."
    //     }]
    // },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Additional Insured - Additional Information',
      },
      content: `Complete the Active Fields for the 'Additional Insured - Additional Information' group.`,
      conditionalOn: (formData: any) => formData?.additional_insured === 'true',
    },

    {
      label: 'Effective Date:',
      dataPath: 'additional_insured_effective_date',
      controlName: 'additional_insured_effective_date',
      elementType: 'date',
      validation: [
        {
          type: 'required',
          message: "'Effective Date' is a required field.",
        },
      ],
      conditionalOn: (formData: any) => formData?.additional_insured === 'true',
    },

    {
      label: 'Insured Names:',
      dataPath: 'insured_names',
      controlName: 'insured_names',
      elementType: 'textarea',
      type: 'text',
      conditionalOn: (formData: any) => formData?.additional_insured === 'true',
    },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Co Insurance Agreement - Additional Information',
      },
      content: `Complete the Active Fields for the 'Co Insurance Agreement - Additional Information' group.`,
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
    },

    {
      label: 'Co_Insurer_1:',
      dataPath: 'co_insurer_1',
      controlName: 'co_insurer_1',
      elementType: 'textarea',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
    },

    {
      label: 'Co_Insurer_1_Percentage:',
      dataPath: 'co_insurer_1_percentage',
      controlName: 'co_insurer_1_percentage',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? percentageFormatterWithSpace(value) : null,
        blurDelay: 2500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Co_Insurer_1_Percentage' must be a 'Percentage' value.",
        },
      ],
    },

    {
      label: 'Co_Insurer_2:',
      dataPath: 'co_insurer_2',
      controlName: 'co_insurer_2',
      elementType: 'textarea',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
    },

    {
      label: 'Co_Insurer_2_Percentage:',
      dataPath: 'co_insurer_2_percentage',
      controlName: 'co_insurer_2_percentage',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? percentageFormatterWithSpace(value) : null,
        blurDelay: 2500,
      },
      //  validation: [{
      //                     type: "custom",
      //                    validatorFn: (value) => value.match(/^[0-9]\d*(\.\d+)?$/),
      //                     message: '"Co_Insurer_2_Percentage" must be a \'Percentage\' value.'
      //                   }]
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Co_Insurer_2_Percentage' must be a 'Percentage' value.",
        },
      ],
    },

    {
      label: 'Co_Insurer_3:',
      dataPath: 'co_insurer_3',
      controlName: 'co_insurer_3',
      elementType: 'textarea',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
    },

    {
      label: 'Co_Insurer_3_Percentage:',
      dataPath: 'co_insurer_3_percentage',
      controlName: 'co_insurer_3_percentage',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? percentageFormatterWithSpace(value) : null,
        blurDelay: 2500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Co_Insurer_3_Percentage' must be a 'Percentage' value.",
        },
      ],
    },

    {
      label: 'Co_Insurer_4:',
      dataPath: 'co_insurer_4',
      controlName: 'co_insurer_4',
      elementType: 'textarea',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
    },

    {
      label: 'Co_Insurer_4_Percentage:',
      dataPath: 'co_insurer_4_percentage',
      controlName: 'co_insurer_4_percentage',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.co_insurance_agreement === 'true',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? percentageFormatterWithSpace(value) : null,
        blurDelay: 2500,
      },
      validation: [
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Co_Insurer_4_Percentage' must be a 'Percentage' value.",
        },
      ],
    },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Prior And Pending Litigation Exclusion Information',
      },
      content: `Complete the Active Fields for the 'Prior And Pending Litigation Exclusion Information' group.`,
      conditionalOn: (formData: any) =>
        formData?.prior_and_pending_litigation_exclusion === 'true',
    },

    {
      label: 'Prior And Pending Litagation Date:',
      dataPath: 'prior_and_pending_litagation_date',
      controlName: 'prior_and_pending_litagation_date',
      elementType: 'date',
      // initialValue:'2010-12-21 00:00:00',
      initialValue: '2010-12-21',

      validation: [
        {
          type: 'required',
          message: "'Prior And Pending Litagation Date' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.prior_and_pending_litigation_exclusion === 'true',
    },
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Run Off Endorsement - Additional Information',
      },
      content: `Complete the Active Fields for the 'Run Off Endorsement - Additional Information' group.`,
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    {
      label: 'Run Off Effective Date:',
      dataPath: 'run_off_effective_date',
      controlName: 'run_off_effective_date',
      elementType: 'date',
      validation: [
        {
          type: 'required',
          message: "'Run Off Effective Date' is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    {
      label: 'Run Off Period - Start Date:',
      dataPath: 'run_off_start_date',
      controlName: 'run_off_start_date',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    {
      label: 'Run Off Period - End Date:',
      dataPath: 'run_off_end_date',
      controlName: 'run_off_end_date',
      elementType: 'date',
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    {
      label: 'Additional Premium Currency:',
      dataPath: 'run_off_ap_ccy',
      controlName: 'run_off_ap_ccy',
      elementType: 'input',
      type: 'text',
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    {
      label: 'Additional Premium:',
      dataPath: 'run_off_ap',
      controlName: 'run_off_ap',
      elementType: 'input',
      type: 'text',
      helpText: 'Leave as zero if no AP is being applied ',
      initialValue: '0',
      maskingConfig: {
        maskingFn: (value) =>
          !!value ? formatDisplayNumberOrDecimal(value) : null,
        blurDelay: 500,
      },
      validation: [
        {
          type: 'required',
          message: "'Additional Premium' is a required field.",
        },
        {
          type: 'custom',
          validatorFn: (value) =>
            !!value ? value.match(/^\s*?[-+]?[\s*0-9]\d*(\.\d+)?$/) : true,
          message: "'Additional Premium' must be a 'Numeric' value.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.run_off_endorsement === 'true',
    },

    //       {
    //         component: 'fluid-section-detail',
    //         props: {
    //           titleLevel: 3,
    //           sectionTitle: 'Miscellaneous Questions'
    //         },
    //         content: `Complete the following questions.`,
    //         conditionalOn: (formData: any) => formData?.run_off_endorsement === 'true'
    //       },

    //       {
    //         label: "Run_Off_Include_AP:",
    //         controlName: "run_off_include_ap",
    //         dataPath: "run_off_include_ap",
    //         elementType: 'radio-group',
    // inlineQuestion: true,
    //         questionWidth: 9,
    //         disabled: 'true',
    //         options: [
    //           { value: "true", label: "Yes" },
    //           { value: "false", label: "No" },
    //           { value: "none", label: "None" }
    //         ],
    //         initialValue: "none",
    //         conditionalOn: (formData: any) => formData?.run_off_endorsement === 'true'

    //       },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Specific Matters Exclusion - Additional Information',
      },
      content: `Complete the Active Fields for the 'Specific Matters Exclusion - Additional Information' group.`,
      conditionalOn: (formData: any) =>
        formData?.specific_matters_exclusion === 'true',
    },

    {
      label: 'Specific Matters Exclusion Details:',
      dataPath: 'specific_matters_details',
      controlName: 'specific_matters_details',
      elementType: 'textarea',
      type: 'text',
      helpText:
        'This is the text that will appear at the end of the endorsement after "attributable to:" ',
      conditionalOn: (formData: any) =>
        formData?.specific_matters_exclusion === 'true',
    },

    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Subsidiary Company Extension',
      },
      content: `Complete the Active Fields for the ' Subsidiary Company Extension' group.`,
      conditionalOn: (formData: any) =>
        formData?.subsidiary_company_extension === 'true',
    },

    {
      label: 'Subsidiary Name:',
      dataPath: 'subsidiary_name',
      controlName: 'subsidiary_name',
      elementType: 'textarea',
      type: 'text',
      validation: [
        {
          type: 'required',
          message: "'Subsidiary Name'  is a required field.",
        },
      ],
      conditionalOn: (formData: any) =>
        formData?.subsidiary_company_extension === 'true',
    },
    // Edit snippets in Opus wizard are base-64 decoded
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Manuscript - Additional Information',
      },
      content: `Complete the Active Fields for the ' Manuscript - Additional Information' group.`,
      conditionalOn: (formData: any) =>
        formData?.manuscript_endorsement_1 === 'true',
    },

    // {
    // label: 'Manuscript Title:',
    // dataPath: 'manuscript_title_1',
    // controlName: 'manuscript_title_1',
    // elementType: 'input',
    // validation: [
    //   {
    //     type: 'required',
    //      message: "'Manuscript Title \' is a required field.'
    //   }],
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_1 === 'true'
    // },

    // {
    //   component: 'fluid-section-detail',
    //   props: {
    //     titleLevel: 3,
    //     sectionTitle: 'Manuscript 2 - Additional Information'
    //   },
    //   content: `Complete the Active Fields for the ' Manuscript 2 - Additional Information' group.`,
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_2 === 'true'
    // },

    // {
    // label: 'Manuscript Title:',
    // dataPath: 'manuscript_title_2',
    // controlName: 'manuscript_title_2',
    // elementType: 'input',
    // validation: [
    //   {
    //     type: 'required',
    //      message: "'Manuscript Title \' is a required field.'
    //   }],
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_2 === 'true'
    // },

    // {
    //   component: 'fluid-section-detail',
    //   props: {
    //     titleLevel: 3,
    //     sectionTitle: 'Manuscript 3 - Additional Information'
    //   },
    //   content: `Complete the Active Fields for the ' Manuscript 3- Additional Information' group.`,
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_3 === 'true'
    // },

    // {
    // label: 'Manuscript Title:',
    // dataPath: 'manuscript_title_3',
    // controlName: 'manuscript_title_3',
    // elementType: 'input',
    // validation: [
    //   {
    //     type: 'required',
    //      message: "'Manuscript Title \' is a required field.'
    //   }],
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_3 === 'true'
    // },
    // {
    //   component: 'fluid-section-detail',
    //   props: {
    //     titleLevel: 3,
    //     sectionTitle: 'Manuscript 4 - Additional Information'
    //   },
    //   content: `Complete the Active Fields for the ' Manuscript 4 - Additional Information' group.`,
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_4 === 'true'
    // },

    // {
    // label: 'Manuscript Title:',
    // dataPath: 'manuscript_title_4',
    // controlName: 'manuscript_title_4',
    // elementType: 'input',
    // validation: [
    //   {
    //     type: 'required',
    //      message: "'Manuscript Title \' is a required field.'
    //   }],
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_4 === 'true'
    // },
    // {
    //   component: 'fluid-section-detail',
    //   props: {
    //     titleLevel: 3,
    //     sectionTitle: 'Manuscript 5 - Additional Information 1'
    //   },
    //   content: `Complete the Active Fields for the ' Manuscript 5 - Additional Information 1' group.`,
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_5 === 'true'
    // },

    // {
    // label: 'Manuscript Title:',
    // dataPath: 'manuscript_title_5',
    // controlName: 'manuscript_title_5',
    // elementType: 'input',
    // validation: [
    //   {
    //     type: 'required',
    //      message: "'Manuscript Title \' is a required field.'
    //   }],
    //   conditionalOn: (formData: any) => formData?.manuscript_endorsement_5 === 'true'
    // },
    {
      label: '',
      dataPath: 'manuscript_details',
      controlName: 'manuscript_details',
      elementType: 'array',
      constraints: {
        minimumEntries: 0,
        maximumEntries: 5,
      },
      conditionalOn: (formData: any) =>        formData?.manuscript_endorsement_1 === 'true',
      formConfig: {
        layout: 'horizontal',
        elements: [
          {
            label: 'Manuscript Title:',
            controlName: 'manuscript_title',
            dataPath: 'manuscript_title',
            elementType: 'input',
            elementWidth: 12,
            type: 'text',
            validation: [
              {
                type: 'required',
                message: "'Manuscript Title' is a required field.",
              },
            ],
          },
        ],
      },
      controlConfig: {
        add: {
          label: "Add Another"
        },
        remove: {
          label: "Remove Entry"
        }
      },
    },
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Signatory',
      },
      content: `Complete the Active Fields for the 'Signatory' group.`,
    },

    {
      label: 'Select Signatory:',
      dataPath: 'signature',
      controlName: 'signature',
      placeholder: '(select a value)',
      elementType: 'select',
      options: [
        { label: 'Caroline Bell', value: 'Caroline Bell' },
        { label: 'Fiona Maher', value: 'Fiona Maher' },
        { label: 'Jonathan Loughran', value: 'Jonathan Loughran' },
        { label: 'Niamh Moloney', value: 'Niamh Moloney' },
        { label: 'Sinead Basquille', value: 'Sinead Basquille' },
      ],
      initialValue: 'Fiona Maher',
      validation: [
        {
          type: 'required',
          message: "'Select Signatory'  is a required field.",
        },
      ],
    },
    // GRSAM-23044 screen not found in OPUS
    /*Increased Limit of Indemnity - Yes*/
    // {
    //   component: 'fluid-section-detail',
    //   props: {
    //     titleLevel: 3,
    //     sectionTitle: 'Increased Limit of Indemnity - Additional Information'
    //   },
    //   content: `Complete the Active Fields for the 'Increased Limit of Indemnity - Additional Information' group.`,
    //   conditionalOn: (formData: any) => formData?.prior_and_pending_litigation_exclusion === 'true'
    // },
    // {
    //   label: 'Effective Date:',
    //   dataPath: 'increase_limit_of_indemnity_effective_date',
    //   controlName: 'increase_limit_of_indemnity_effective_date',
    //   elementType: 'date',
    //   placeholder: ' ',
    //   // validation: [
    //   //   {
    //   //     type: 'required',
    //   //     message: `'Effective Date' is a required field.`
    //   //   },
    //   // ],
    //   conditionalOn: (formData: any) => formData?.prior_and_pending_litigation_exclusion === 'true',
    // },
    // {
    //   label: 'Limit of Indemnity:',
    //   dataPath: 'increase_limit_of_indemnity',
    //   controlName: 'increase_limit_of_indemnity',
    //   elementType: 'input',
    //   type: 'text',
    //   maskingConfig: {
    //     maskingFn: (value) =>  formatDisplayNumberOrDecimal(value),
    //     blurDelay: 500
    //     },
    //   validation: [
    //     {
    //       type: "custom",
    //       validatorFn: (value) => (!!value ? value.match(/^[0-9]\d*(\.\d+)?$/) : true),
    //       message: `'Limit of Indemnity' must be a 'Numeric' value.`
    //   },
    //   {
    //     type: 'required',
    //     message: `'Limit of Indemnity' is a required field.`
    //   },
    //   ],
    //   conditionalOn: (formData: any) => formData?.prior_and_pending_litigation_exclusion === 'true'
    // },
    // {
    //   label: 'Basis of Cover:',
    //   dataPath: 'increased_limit_of_indemnity_basis_of_cover',
    //   controlName: 'increased_limit_of_indemnity_basis_of_cover',
    //   elementType: 'combo-box',
    //   allowCustomInput: true,
    //   placeholder: '(select or type a value)',
    //   initialValue: 'any one claim',
    //   options: [
    //     { label: 'any one claim', value: 'any one claim' },
    //     { label: 'in the aggregrate', value: 'in the aggregrate' }
    //   ],
    //   validation: [
    //     {
    //       type: 'required',
    //       message: `'Basis of Cover' is a required field.`
    //     }
    //   ],
    //   conditionalOn: (formData: any) => formData?.prior_and_pending_litigation_exclusion === 'true'
    // },
    {
      component: 'fluid-section-detail',
      props: {
        titleLevel: 3,
        sectionTitle: 'Finish',
      },
      content: `You have completed all the steps required for this document.<br><br>Once you click 'Finish' your document will be created and will be made availaible for viewing.`,
    },
    //policy number- DUAA5RAC008  underscore in Opus wizard
    {
      label: 'Document Name:',
      dataPath: 'document_name',
      controlName: 'document_name',
      elementType: 'input',
      maskingConfig: {
        maskingFn: (value) => formatSpecialCharacterstoUnderScore(value),
        blurDelay: 500,
      },
    },
  ]


