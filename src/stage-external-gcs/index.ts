/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StageExternalGcsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a comment for the stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#comment StageExternalGcs#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the stage. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#database StageExternalGcs#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#id StageExternalGcs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the stage; must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#name StageExternalGcs#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the stage. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#schema StageExternalGcs#schema}
  */
  readonly schema: string;
  /**
  * Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. GCS stages require a storage integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#storage_integration StageExternalGcs#storage_integration}
  */
  readonly storageIntegration: string;
  /**
  * Specifies the URL for the GCS bucket (e.g., 'gcs://bucket/path/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#url StageExternalGcs#url}
  */
  readonly url: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#directory StageExternalGcs#directory}
  */
  readonly directory?: StageExternalGcsDirectory;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#encryption StageExternalGcs#encryption}
  */
  readonly encryption?: StageExternalGcsEncryption;
  /**
  * file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#file_format StageExternalGcs#file_format}
  */
  readonly fileFormat?: StageExternalGcsFileFormat;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#timeouts StageExternalGcs#timeouts}
  */
  readonly timeouts?: StageExternalGcsTimeouts;
}
export interface StageExternalGcsDescribeOutputDirectoryTable {
}

export function stageExternalGcsDescribeOutputDirectoryTableToTerraform(struct?: StageExternalGcsDescribeOutputDirectoryTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputDirectoryTableToHclTerraform(struct?: StageExternalGcsDescribeOutputDirectoryTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputDirectoryTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputDirectoryTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputDirectoryTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_refresh - computed: true, optional: false, required: false
  public get autoRefresh() {
    return this.getBooleanAttribute('auto_refresh');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // last_refreshed_on - computed: true, optional: false, required: false
  public get lastRefreshedOn() {
    return this.getStringAttribute('last_refreshed_on');
  }
}

export class StageExternalGcsDescribeOutputDirectoryTableList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputDirectoryTableOutputReference {
    return new StageExternalGcsDescribeOutputDirectoryTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatAvro {
}

export function stageExternalGcsDescribeOutputFileFormatAvroToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatAvroToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatAvroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalGcsDescribeOutputFileFormatAvroList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatAvroOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatAvroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatCsv {
}

export function stageExternalGcsDescribeOutputFileFormatCsvToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatCsvToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_format - computed: true, optional: false, required: false
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // empty_field_as_null - computed: true, optional: false, required: false
  public get emptyFieldAsNull() {
    return this.getBooleanAttribute('empty_field_as_null');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // error_on_column_count_mismatch - computed: true, optional: false, required: false
  public get errorOnColumnCountMismatch() {
    return this.getBooleanAttribute('error_on_column_count_mismatch');
  }

  // escape - computed: true, optional: false, required: false
  public get escape() {
    return this.getStringAttribute('escape');
  }

  // escape_unenclosed_field - computed: true, optional: false, required: false
  public get escapeUnenclosedField() {
    return this.getStringAttribute('escape_unenclosed_field');
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // field_optionally_enclosed_by - computed: true, optional: false, required: false
  public get fieldOptionallyEnclosedBy() {
    return this.getStringAttribute('field_optionally_enclosed_by');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // parse_header - computed: true, optional: false, required: false
  public get parseHeader() {
    return this.getBooleanAttribute('parse_header');
  }

  // record_delimiter - computed: true, optional: false, required: false
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_blank_lines - computed: true, optional: false, required: false
  public get skipBlankLines() {
    return this.getBooleanAttribute('skip_blank_lines');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // skip_header - computed: true, optional: false, required: false
  public get skipHeader() {
    return this.getNumberAttribute('skip_header');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validate_utf8 - computed: true, optional: false, required: false
  public get validateUtf8() {
    return this.getBooleanAttribute('validate_utf8');
  }
}

export class StageExternalGcsDescribeOutputFileFormatCsvList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatCsvOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatJson {
}

export function stageExternalGcsDescribeOutputFileFormatJsonToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatJsonToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_duplicate - computed: true, optional: false, required: false
  public get allowDuplicate() {
    return this.getBooleanAttribute('allow_duplicate');
  }

  // binary_format - computed: true, optional: false, required: false
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // date_format - computed: true, optional: false, required: false
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }

  // enable_octal - computed: true, optional: false, required: false
  public get enableOctal() {
    return this.getBooleanAttribute('enable_octal');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // ignore_utf8_errors - computed: true, optional: false, required: false
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // strip_null_values - computed: true, optional: false, required: false
  public get stripNullValues() {
    return this.getBooleanAttribute('strip_null_values');
  }

  // strip_outer_array - computed: true, optional: false, required: false
  public get stripOuterArray() {
    return this.getBooleanAttribute('strip_outer_array');
  }

  // time_format - computed: true, optional: false, required: false
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalGcsDescribeOutputFileFormatJsonList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatJsonOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatOrc {
}

export function stageExternalGcsDescribeOutputFileFormatOrcToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatOrcToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatOrcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatOrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatOrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalGcsDescribeOutputFileFormatOrcList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatOrcOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatOrcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatParquet {
}

export function stageExternalGcsDescribeOutputFileFormatParquetToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatParquetToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatParquetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatParquet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatParquet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_as_text - computed: true, optional: false, required: false
  public get binaryAsText() {
    return this.getBooleanAttribute('binary_as_text');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // null_if - computed: true, optional: false, required: false
  public get nullIf() {
    return this.getListAttribute('null_if');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // trim_space - computed: true, optional: false, required: false
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_logical_type - computed: true, optional: false, required: false
  public get useLogicalType() {
    return this.getBooleanAttribute('use_logical_type');
  }

  // use_vectorized_scanner - computed: true, optional: false, required: false
  public get useVectorizedScanner() {
    return this.getBooleanAttribute('use_vectorized_scanner');
  }
}

export class StageExternalGcsDescribeOutputFileFormatParquetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatParquetOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatParquetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormatXml {
}

export function stageExternalGcsDescribeOutputFileFormatXmlToTerraform(struct?: StageExternalGcsDescribeOutputFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatXmlToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatXmlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormatXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormatXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // disable_auto_convert - computed: true, optional: false, required: false
  public get disableAutoConvert() {
    return this.getBooleanAttribute('disable_auto_convert');
  }

  // ignore_utf8_errors - computed: true, optional: false, required: false
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }

  // preserve_space - computed: true, optional: false, required: false
  public get preserveSpace() {
    return this.getBooleanAttribute('preserve_space');
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }

  // skip_byte_order_mark - computed: true, optional: false, required: false
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }

  // strip_outer_element - computed: true, optional: false, required: false
  public get stripOuterElement() {
    return this.getBooleanAttribute('strip_outer_element');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StageExternalGcsDescribeOutputFileFormatXmlList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatXmlOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutputFileFormat {
}

export function stageExternalGcsDescribeOutputFileFormatToTerraform(struct?: StageExternalGcsDescribeOutputFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputFileFormatToHclTerraform(struct?: StageExternalGcsDescribeOutputFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutputFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutputFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avro - computed: true, optional: false, required: false
  private _avro = new StageExternalGcsDescribeOutputFileFormatAvroList(this, "avro", false);
  public get avro() {
    return this._avro;
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new StageExternalGcsDescribeOutputFileFormatCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }

  // format_name - computed: true, optional: false, required: false
  public get formatName() {
    return this.getStringAttribute('format_name');
  }

  // json - computed: true, optional: false, required: false
  private _json = new StageExternalGcsDescribeOutputFileFormatJsonList(this, "json", false);
  public get json() {
    return this._json;
  }

  // orc - computed: true, optional: false, required: false
  private _orc = new StageExternalGcsDescribeOutputFileFormatOrcList(this, "orc", false);
  public get orc() {
    return this._orc;
  }

  // parquet - computed: true, optional: false, required: false
  private _parquet = new StageExternalGcsDescribeOutputFileFormatParquetList(this, "parquet", false);
  public get parquet() {
    return this._parquet;
  }

  // xml - computed: true, optional: false, required: false
  private _xml = new StageExternalGcsDescribeOutputFileFormatXmlList(this, "xml", false);
  public get xml() {
    return this._xml;
  }
}

export class StageExternalGcsDescribeOutputFileFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputFileFormatOutputReference {
    return new StageExternalGcsDescribeOutputFileFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDescribeOutput {
}

export function stageExternalGcsDescribeOutputToTerraform(struct?: StageExternalGcsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsDescribeOutputToHclTerraform(struct?: StageExternalGcsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsDescribeOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_table - computed: true, optional: false, required: false
  private _directoryTable = new StageExternalGcsDescribeOutputDirectoryTableList(this, "directory_table", false);
  public get directoryTable() {
    return this._directoryTable;
  }

  // file_format - computed: true, optional: false, required: false
  private _fileFormat = new StageExternalGcsDescribeOutputFileFormatList(this, "file_format", false);
  public get fileFormat() {
    return this._fileFormat;
  }
}

export class StageExternalGcsDescribeOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsDescribeOutputOutputReference {
    return new StageExternalGcsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsShowOutput {
}

export function stageExternalGcsShowOutputToTerraform(struct?: StageExternalGcsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsShowOutputToHclTerraform(struct?: StageExternalGcsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsShowOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StageExternalGcsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // directory_enabled - computed: true, optional: false, required: false
  public get directoryEnabled() {
    return this.getBooleanAttribute('directory_enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // has_credentials - computed: true, optional: false, required: false
  public get hasCredentials() {
    return this.getBooleanAttribute('has_credentials');
  }

  // has_encryption_key - computed: true, optional: false, required: false
  public get hasEncryptionKey() {
    return this.getBooleanAttribute('has_encryption_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // storage_integration - computed: true, optional: false, required: false
  public get storageIntegration() {
    return this.getStringAttribute('storage_integration');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class StageExternalGcsShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StageExternalGcsShowOutputOutputReference {
    return new StageExternalGcsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StageExternalGcsDirectory {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#auto_refresh StageExternalGcs#auto_refresh}
  */
  readonly autoRefresh?: string;
  /**
  * Specifies whether to enable a directory table on the external stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#enable StageExternalGcs#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
  /**
  * Specifies the name of the notification integration used to automatically refresh the directory table metadata. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#notification_integration StageExternalGcs#notification_integration}
  */
  readonly notificationIntegration?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#refresh_on_create StageExternalGcs#refresh_on_create}
  */
  readonly refreshOnCreate?: string;
}

export function stageExternalGcsDirectoryToTerraform(struct?: StageExternalGcsDirectoryOutputReference | StageExternalGcsDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_refresh: cdktn.stringToTerraform(struct!.autoRefresh),
    enable: cdktn.booleanToTerraform(struct!.enable),
    notification_integration: cdktn.stringToTerraform(struct!.notificationIntegration),
    refresh_on_create: cdktn.stringToTerraform(struct!.refreshOnCreate),
  }
}


export function stageExternalGcsDirectoryToHclTerraform(struct?: StageExternalGcsDirectoryOutputReference | StageExternalGcsDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_refresh: {
      value: cdktn.stringToHclTerraform(struct!.autoRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_integration: {
      value: cdktn.stringToHclTerraform(struct!.notificationIntegration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_on_create: {
      value: cdktn.stringToHclTerraform(struct!.refreshOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRefresh = this._autoRefresh;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._notificationIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationIntegration = this._notificationIntegration;
    }
    if (this._refreshOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOnCreate = this._refreshOnCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRefresh = undefined;
      this._enable = undefined;
      this._notificationIntegration = undefined;
      this._refreshOnCreate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRefresh = value.autoRefresh;
      this._enable = value.enable;
      this._notificationIntegration = value.notificationIntegration;
      this._refreshOnCreate = value.refreshOnCreate;
    }
  }

  // auto_refresh - computed: false, optional: true, required: false
  private _autoRefresh?: string; 
  public get autoRefresh() {
    return this.getStringAttribute('auto_refresh');
  }
  public set autoRefresh(value: string) {
    this._autoRefresh = value;
  }
  public resetAutoRefresh() {
    this._autoRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshInput() {
    return this._autoRefresh;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // notification_integration - computed: false, optional: true, required: false
  private _notificationIntegration?: string; 
  public get notificationIntegration() {
    return this.getStringAttribute('notification_integration');
  }
  public set notificationIntegration(value: string) {
    this._notificationIntegration = value;
  }
  public resetNotificationIntegration() {
    this._notificationIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationIntegrationInput() {
    return this._notificationIntegration;
  }

  // refresh_on_create - computed: false, optional: true, required: false
  private _refreshOnCreate?: string; 
  public get refreshOnCreate() {
    return this.getStringAttribute('refresh_on_create');
  }
  public set refreshOnCreate(value: string) {
    this._refreshOnCreate = value;
  }
  public resetRefreshOnCreate() {
    this._refreshOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnCreateInput() {
    return this._refreshOnCreate;
  }
}
export interface StageExternalGcsEncryptionGcsSseKms {
  /**
  * Specifies the KMS-managed key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#kms_key_id StageExternalGcs#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function stageExternalGcsEncryptionGcsSseKmsToTerraform(struct?: StageExternalGcsEncryptionGcsSseKmsOutputReference | StageExternalGcsEncryptionGcsSseKms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function stageExternalGcsEncryptionGcsSseKmsToHclTerraform(struct?: StageExternalGcsEncryptionGcsSseKmsOutputReference | StageExternalGcsEncryptionGcsSseKms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsEncryptionGcsSseKmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsEncryptionGcsSseKms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsEncryptionGcsSseKms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface StageExternalGcsEncryptionNone {
}

export function stageExternalGcsEncryptionNoneToTerraform(struct?: StageExternalGcsEncryptionNoneOutputReference | StageExternalGcsEncryptionNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stageExternalGcsEncryptionNoneToHclTerraform(struct?: StageExternalGcsEncryptionNoneOutputReference | StageExternalGcsEncryptionNone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StageExternalGcsEncryptionNoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsEncryptionNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsEncryptionNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface StageExternalGcsEncryption {
  /**
  * gcs_sse_kms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#gcs_sse_kms StageExternalGcs#gcs_sse_kms}
  */
  readonly gcsSseKms?: StageExternalGcsEncryptionGcsSseKms;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#none StageExternalGcs#none}
  */
  readonly none?: StageExternalGcsEncryptionNone;
}

export function stageExternalGcsEncryptionToTerraform(struct?: StageExternalGcsEncryptionOutputReference | StageExternalGcsEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_sse_kms: stageExternalGcsEncryptionGcsSseKmsToTerraform(struct!.gcsSseKms),
    none: stageExternalGcsEncryptionNoneToTerraform(struct!.none),
  }
}


export function stageExternalGcsEncryptionToHclTerraform(struct?: StageExternalGcsEncryptionOutputReference | StageExternalGcsEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_sse_kms: {
      value: stageExternalGcsEncryptionGcsSseKmsToHclTerraform(struct!.gcsSseKms),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsEncryptionGcsSseKmsList",
    },
    none: {
      value: stageExternalGcsEncryptionNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsEncryptionNoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsSseKms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsSseKms = this._gcsSseKms?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsSseKms.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsSseKms.internalValue = value.gcsSseKms;
      this._none.internalValue = value.none;
    }
  }

  // gcs_sse_kms - computed: false, optional: true, required: false
  private _gcsSseKms = new StageExternalGcsEncryptionGcsSseKmsOutputReference(this, "gcs_sse_kms");
  public get gcsSseKms() {
    return this._gcsSseKms;
  }
  public putGcsSseKms(value: StageExternalGcsEncryptionGcsSseKms) {
    this._gcsSseKms.internalValue = value;
  }
  public resetGcsSseKms() {
    this._gcsSseKms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSseKmsInput() {
    return this._gcsSseKms.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new StageExternalGcsEncryptionNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: StageExternalGcsEncryptionNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}
export interface StageExternalGcsFileFormatAvro {
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}
  */
  readonly compression?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalGcsFileFormatAvroToTerraform(struct?: StageExternalGcsFileFormatAvroOutputReference | StageExternalGcsFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalGcsFileFormatAvroToHclTerraform(struct?: StageExternalGcsFileFormatAvroOutputReference | StageExternalGcsFileFormatAvro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatAvroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalGcsFileFormatCsv {
  /**
  * Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}
  */
  readonly compression?: string;
  /**
  * Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}
  */
  readonly dateFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#empty_field_as_null StageExternalGcs#empty_field_as_null}
  */
  readonly emptyFieldAsNull?: string;
  /**
  * Specifies the character set of the source data when loading data into a table. Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#encoding StageExternalGcs#encoding}
  */
  readonly encoding?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#error_on_column_count_mismatch StageExternalGcs#error_on_column_count_mismatch}
  */
  readonly errorOnColumnCountMismatch?: string;
  /**
  * Single character string used as the escape character for field values. Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#escape StageExternalGcs#escape}
  */
  readonly escape?: string;
  /**
  * Single character string used as the escape character for unenclosed field values only. Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#escape_unenclosed_field StageExternalGcs#escape_unenclosed_field}
  */
  readonly escapeUnenclosedField?: string;
  /**
  * One or more singlebyte or multibyte characters that separate fields in an input file. Use `NONE` to specify no delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#field_delimiter StageExternalGcs#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Character used to enclose strings. Use `NONE` to specify no enclosure character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#field_optionally_enclosed_by StageExternalGcs#field_optionally_enclosed_by}
  */
  readonly fieldOptionallyEnclosedBy?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}
  */
  readonly multiLine?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#parse_header StageExternalGcs#parse_header}
  */
  readonly parseHeader?: string;
  /**
  * One or more singlebyte or multibyte characters that separate records in an input file. Use `NONE` to specify no delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#record_delimiter StageExternalGcs#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#skip_blank_lines StageExternalGcs#skip_blank_lines}
  */
  readonly skipBlankLines?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#skip_header StageExternalGcs#skip_header}
  */
  readonly skipHeader?: number;
  /**
  * Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalGcsFileFormatCsvToTerraform(struct?: StageExternalGcsFileFormatCsvOutputReference | StageExternalGcsFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_format: cdktn.stringToTerraform(struct!.binaryFormat),
    compression: cdktn.stringToTerraform(struct!.compression),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    empty_field_as_null: cdktn.stringToTerraform(struct!.emptyFieldAsNull),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    error_on_column_count_mismatch: cdktn.stringToTerraform(struct!.errorOnColumnCountMismatch),
    escape: cdktn.stringToTerraform(struct!.escape),
    escape_unenclosed_field: cdktn.stringToTerraform(struct!.escapeUnenclosedField),
    field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
    field_optionally_enclosed_by: cdktn.stringToTerraform(struct!.fieldOptionallyEnclosedBy),
    file_extension: cdktn.stringToTerraform(struct!.fileExtension),
    multi_line: cdktn.stringToTerraform(struct!.multiLine),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    parse_header: cdktn.stringToTerraform(struct!.parseHeader),
    record_delimiter: cdktn.stringToTerraform(struct!.recordDelimiter),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_blank_lines: cdktn.stringToTerraform(struct!.skipBlankLines),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    skip_header: cdktn.numberToTerraform(struct!.skipHeader),
    time_format: cdktn.stringToTerraform(struct!.timeFormat),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalGcsFileFormatCsvToHclTerraform(struct?: StageExternalGcsFileFormatCsvOutputReference | StageExternalGcsFileFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_format: {
      value: cdktn.stringToHclTerraform(struct!.binaryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_field_as_null: {
      value: cdktn.stringToHclTerraform(struct!.emptyFieldAsNull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_on_column_count_mismatch: {
      value: cdktn.stringToHclTerraform(struct!.errorOnColumnCountMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape: {
      value: cdktn.stringToHclTerraform(struct!.escape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_unenclosed_field: {
      value: cdktn.stringToHclTerraform(struct!.escapeUnenclosedField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_optionally_enclosed_by: {
      value: cdktn.stringToHclTerraform(struct!.fieldOptionallyEnclosedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktn.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line: {
      value: cdktn.stringToHclTerraform(struct!.multiLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parse_header: {
      value: cdktn.stringToHclTerraform(struct!.parseHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.recordDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_blank_lines: {
      value: cdktn.stringToHclTerraform(struct!.skipBlankLines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_header: {
      value: cdktn.numberToHclTerraform(struct!.skipHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_format: {
      value: cdktn.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryFormat = this._binaryFormat;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._emptyFieldAsNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFieldAsNull = this._emptyFieldAsNull;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._errorOnColumnCountMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOnColumnCountMismatch = this._errorOnColumnCountMismatch;
    }
    if (this._escape !== undefined) {
      hasAnyValues = true;
      internalValueResult.escape = this._escape;
    }
    if (this._escapeUnenclosedField !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeUnenclosedField = this._escapeUnenclosedField;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._fieldOptionallyEnclosedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOptionallyEnclosedBy = this._fieldOptionallyEnclosedBy;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._multiLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLine = this._multiLine;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._parseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeader = this._parseHeader;
    }
    if (this._recordDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDelimiter = this._recordDelimiter;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipBlankLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBlankLines = this._skipBlankLines;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._skipHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHeader = this._skipHeader;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryFormat = undefined;
      this._compression = undefined;
      this._dateFormat = undefined;
      this._emptyFieldAsNull = undefined;
      this._encoding = undefined;
      this._errorOnColumnCountMismatch = undefined;
      this._escape = undefined;
      this._escapeUnenclosedField = undefined;
      this._fieldDelimiter = undefined;
      this._fieldOptionallyEnclosedBy = undefined;
      this._fileExtension = undefined;
      this._multiLine = undefined;
      this._nullIf = undefined;
      this._parseHeader = undefined;
      this._recordDelimiter = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipBlankLines = undefined;
      this._skipByteOrderMark = undefined;
      this._skipHeader = undefined;
      this._timeFormat = undefined;
      this._timestampFormat = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryFormat = value.binaryFormat;
      this._compression = value.compression;
      this._dateFormat = value.dateFormat;
      this._emptyFieldAsNull = value.emptyFieldAsNull;
      this._encoding = value.encoding;
      this._errorOnColumnCountMismatch = value.errorOnColumnCountMismatch;
      this._escape = value.escape;
      this._escapeUnenclosedField = value.escapeUnenclosedField;
      this._fieldDelimiter = value.fieldDelimiter;
      this._fieldOptionallyEnclosedBy = value.fieldOptionallyEnclosedBy;
      this._fileExtension = value.fileExtension;
      this._multiLine = value.multiLine;
      this._nullIf = value.nullIf;
      this._parseHeader = value.parseHeader;
      this._recordDelimiter = value.recordDelimiter;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipBlankLines = value.skipBlankLines;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._skipHeader = value.skipHeader;
      this._timeFormat = value.timeFormat;
      this._timestampFormat = value.timestampFormat;
      this._trimSpace = value.trimSpace;
    }
  }

  // binary_format - computed: false, optional: true, required: false
  private _binaryFormat?: string; 
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }
  public set binaryFormat(value: string) {
    this._binaryFormat = value;
  }
  public resetBinaryFormat() {
    this._binaryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryFormatInput() {
    return this._binaryFormat;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // empty_field_as_null - computed: false, optional: true, required: false
  private _emptyFieldAsNull?: string; 
  public get emptyFieldAsNull() {
    return this.getStringAttribute('empty_field_as_null');
  }
  public set emptyFieldAsNull(value: string) {
    this._emptyFieldAsNull = value;
  }
  public resetEmptyFieldAsNull() {
    this._emptyFieldAsNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFieldAsNullInput() {
    return this._emptyFieldAsNull;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // error_on_column_count_mismatch - computed: false, optional: true, required: false
  private _errorOnColumnCountMismatch?: string; 
  public get errorOnColumnCountMismatch() {
    return this.getStringAttribute('error_on_column_count_mismatch');
  }
  public set errorOnColumnCountMismatch(value: string) {
    this._errorOnColumnCountMismatch = value;
  }
  public resetErrorOnColumnCountMismatch() {
    this._errorOnColumnCountMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnColumnCountMismatchInput() {
    return this._errorOnColumnCountMismatch;
  }

  // escape - computed: false, optional: true, required: false
  private _escape?: string; 
  public get escape() {
    return this.getStringAttribute('escape');
  }
  public set escape(value: string) {
    this._escape = value;
  }
  public resetEscape() {
    this._escape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeInput() {
    return this._escape;
  }

  // escape_unenclosed_field - computed: false, optional: true, required: false
  private _escapeUnenclosedField?: string; 
  public get escapeUnenclosedField() {
    return this.getStringAttribute('escape_unenclosed_field');
  }
  public set escapeUnenclosedField(value: string) {
    this._escapeUnenclosedField = value;
  }
  public resetEscapeUnenclosedField() {
    this._escapeUnenclosedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeUnenclosedFieldInput() {
    return this._escapeUnenclosedField;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // field_optionally_enclosed_by - computed: false, optional: true, required: false
  private _fieldOptionallyEnclosedBy?: string; 
  public get fieldOptionallyEnclosedBy() {
    return this.getStringAttribute('field_optionally_enclosed_by');
  }
  public set fieldOptionallyEnclosedBy(value: string) {
    this._fieldOptionallyEnclosedBy = value;
  }
  public resetFieldOptionallyEnclosedBy() {
    this._fieldOptionallyEnclosedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionallyEnclosedByInput() {
    return this._fieldOptionallyEnclosedBy;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // multi_line - computed: false, optional: true, required: false
  private _multiLine?: string; 
  public get multiLine() {
    return this.getStringAttribute('multi_line');
  }
  public set multiLine(value: string) {
    this._multiLine = value;
  }
  public resetMultiLine() {
    this._multiLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineInput() {
    return this._multiLine;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // parse_header - computed: false, optional: true, required: false
  private _parseHeader?: string; 
  public get parseHeader() {
    return this.getStringAttribute('parse_header');
  }
  public set parseHeader(value: string) {
    this._parseHeader = value;
  }
  public resetParseHeader() {
    this._parseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderInput() {
    return this._parseHeader;
  }

  // record_delimiter - computed: false, optional: true, required: false
  private _recordDelimiter?: string; 
  public get recordDelimiter() {
    return this.getStringAttribute('record_delimiter');
  }
  public set recordDelimiter(value: string) {
    this._recordDelimiter = value;
  }
  public resetRecordDelimiter() {
    this._recordDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDelimiterInput() {
    return this._recordDelimiter;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_blank_lines - computed: false, optional: true, required: false
  private _skipBlankLines?: string; 
  public get skipBlankLines() {
    return this.getStringAttribute('skip_blank_lines');
  }
  public set skipBlankLines(value: string) {
    this._skipBlankLines = value;
  }
  public resetSkipBlankLines() {
    this._skipBlankLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBlankLinesInput() {
    return this._skipBlankLines;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // skip_header - computed: false, optional: true, required: false
  private _skipHeader?: number; 
  public get skipHeader() {
    return this.getNumberAttribute('skip_header');
  }
  public set skipHeader(value: number) {
    this._skipHeader = value;
  }
  public resetSkipHeader() {
    this._skipHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHeaderInput() {
    return this._skipHeader;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalGcsFileFormatJson {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#allow_duplicate StageExternalGcs#allow_duplicate}
  */
  readonly allowDuplicate?: string;
  /**
  * Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#binary_format StageExternalGcs#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}
  */
  readonly compression?: string;
  /**
  * Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#date_format StageExternalGcs#date_format}
  */
  readonly dateFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#enable_octal StageExternalGcs#enable_octal}
  */
  readonly enableOctal?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#file_extension StageExternalGcs#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#multi_line StageExternalGcs#multi_line}
  */
  readonly multiLine?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#strip_null_values StageExternalGcs#strip_null_values}
  */
  readonly stripNullValues?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#strip_outer_array StageExternalGcs#strip_outer_array}
  */
  readonly stripOuterArray?: string;
  /**
  * Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#time_format StageExternalGcs#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#timestamp_format StageExternalGcs#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalGcsFileFormatJsonToTerraform(struct?: StageExternalGcsFileFormatJsonOutputReference | StageExternalGcsFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate: cdktn.stringToTerraform(struct!.allowDuplicate),
    binary_format: cdktn.stringToTerraform(struct!.binaryFormat),
    compression: cdktn.stringToTerraform(struct!.compression),
    date_format: cdktn.stringToTerraform(struct!.dateFormat),
    enable_octal: cdktn.stringToTerraform(struct!.enableOctal),
    file_extension: cdktn.stringToTerraform(struct!.fileExtension),
    ignore_utf8_errors: cdktn.stringToTerraform(struct!.ignoreUtf8Errors),
    multi_line: cdktn.stringToTerraform(struct!.multiLine),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    strip_null_values: cdktn.stringToTerraform(struct!.stripNullValues),
    strip_outer_array: cdktn.stringToTerraform(struct!.stripOuterArray),
    time_format: cdktn.stringToTerraform(struct!.timeFormat),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalGcsFileFormatJsonToHclTerraform(struct?: StageExternalGcsFileFormatJsonOutputReference | StageExternalGcsFileFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicate: {
      value: cdktn.stringToHclTerraform(struct!.allowDuplicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_format: {
      value: cdktn.stringToHclTerraform(struct!.binaryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktn.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_octal: {
      value: cdktn.stringToHclTerraform(struct!.enableOctal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_extension: {
      value: cdktn.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_utf8_errors: {
      value: cdktn.stringToHclTerraform(struct!.ignoreUtf8Errors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line: {
      value: cdktn.stringToHclTerraform(struct!.multiLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_null_values: {
      value: cdktn.stringToHclTerraform(struct!.stripNullValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_outer_array: {
      value: cdktn.stringToHclTerraform(struct!.stripOuterArray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktn.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicate = this._allowDuplicate;
    }
    if (this._binaryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryFormat = this._binaryFormat;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._enableOctal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOctal = this._enableOctal;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._ignoreUtf8Errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUtf8Errors = this._ignoreUtf8Errors;
    }
    if (this._multiLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLine = this._multiLine;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._stripNullValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripNullValues = this._stripNullValues;
    }
    if (this._stripOuterArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripOuterArray = this._stripOuterArray;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDuplicate = undefined;
      this._binaryFormat = undefined;
      this._compression = undefined;
      this._dateFormat = undefined;
      this._enableOctal = undefined;
      this._fileExtension = undefined;
      this._ignoreUtf8Errors = undefined;
      this._multiLine = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipByteOrderMark = undefined;
      this._stripNullValues = undefined;
      this._stripOuterArray = undefined;
      this._timeFormat = undefined;
      this._timestampFormat = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDuplicate = value.allowDuplicate;
      this._binaryFormat = value.binaryFormat;
      this._compression = value.compression;
      this._dateFormat = value.dateFormat;
      this._enableOctal = value.enableOctal;
      this._fileExtension = value.fileExtension;
      this._ignoreUtf8Errors = value.ignoreUtf8Errors;
      this._multiLine = value.multiLine;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._stripNullValues = value.stripNullValues;
      this._stripOuterArray = value.stripOuterArray;
      this._timeFormat = value.timeFormat;
      this._timestampFormat = value.timestampFormat;
      this._trimSpace = value.trimSpace;
    }
  }

  // allow_duplicate - computed: false, optional: true, required: false
  private _allowDuplicate?: string; 
  public get allowDuplicate() {
    return this.getStringAttribute('allow_duplicate');
  }
  public set allowDuplicate(value: string) {
    this._allowDuplicate = value;
  }
  public resetAllowDuplicate() {
    this._allowDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateInput() {
    return this._allowDuplicate;
  }

  // binary_format - computed: false, optional: true, required: false
  private _binaryFormat?: string; 
  public get binaryFormat() {
    return this.getStringAttribute('binary_format');
  }
  public set binaryFormat(value: string) {
    this._binaryFormat = value;
  }
  public resetBinaryFormat() {
    this._binaryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryFormatInput() {
    return this._binaryFormat;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // enable_octal - computed: false, optional: true, required: false
  private _enableOctal?: string; 
  public get enableOctal() {
    return this.getStringAttribute('enable_octal');
  }
  public set enableOctal(value: string) {
    this._enableOctal = value;
  }
  public resetEnableOctal() {
    this._enableOctal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOctalInput() {
    return this._enableOctal;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: string; 
  public get ignoreUtf8Errors() {
    return this.getStringAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: string) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors;
  }

  // multi_line - computed: false, optional: true, required: false
  private _multiLine?: string; 
  public get multiLine() {
    return this.getStringAttribute('multi_line');
  }
  public set multiLine(value: string) {
    this._multiLine = value;
  }
  public resetMultiLine() {
    this._multiLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineInput() {
    return this._multiLine;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // strip_null_values - computed: false, optional: true, required: false
  private _stripNullValues?: string; 
  public get stripNullValues() {
    return this.getStringAttribute('strip_null_values');
  }
  public set stripNullValues(value: string) {
    this._stripNullValues = value;
  }
  public resetStripNullValues() {
    this._stripNullValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripNullValuesInput() {
    return this._stripNullValues;
  }

  // strip_outer_array - computed: false, optional: true, required: false
  private _stripOuterArray?: string; 
  public get stripOuterArray() {
    return this.getStringAttribute('strip_outer_array');
  }
  public set stripOuterArray(value: string) {
    this._stripOuterArray = value;
  }
  public resetStripOuterArray() {
    this._stripOuterArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterArrayInput() {
    return this._stripOuterArray;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // timestamp_format - computed: false, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalGcsFileFormatOrc {
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}
  */
  readonly trimSpace?: string;
}

export function stageExternalGcsFileFormatOrcToTerraform(struct?: StageExternalGcsFileFormatOrcOutputReference | StageExternalGcsFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
  }
}


export function stageExternalGcsFileFormatOrcToHclTerraform(struct?: StageExternalGcsFileFormatOrcOutputReference | StageExternalGcsFileFormatOrc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatOrcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatOrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatOrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
    }
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }
}
export interface StageExternalGcsFileFormatParquet {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#binary_as_text StageExternalGcs#binary_as_text}
  */
  readonly binaryAsText?: string;
  /**
  * Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}
  */
  readonly compression?: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#null_if StageExternalGcs#null_if}
  */
  readonly nullIf?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#trim_space StageExternalGcs#trim_space}
  */
  readonly trimSpace?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#use_logical_type StageExternalGcs#use_logical_type}
  */
  readonly useLogicalType?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#use_vectorized_scanner StageExternalGcs#use_vectorized_scanner}
  */
  readonly useVectorizedScanner?: string;
}

export function stageExternalGcsFileFormatParquetToTerraform(struct?: StageExternalGcsFileFormatParquetOutputReference | StageExternalGcsFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_as_text: cdktn.stringToTerraform(struct!.binaryAsText),
    compression: cdktn.stringToTerraform(struct!.compression),
    null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nullIf),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    trim_space: cdktn.stringToTerraform(struct!.trimSpace),
    use_logical_type: cdktn.stringToTerraform(struct!.useLogicalType),
    use_vectorized_scanner: cdktn.stringToTerraform(struct!.useVectorizedScanner),
  }
}


export function stageExternalGcsFileFormatParquetToHclTerraform(struct?: StageExternalGcsFileFormatParquetOutputReference | StageExternalGcsFileFormatParquet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_as_text: {
      value: cdktn.stringToHclTerraform(struct!.binaryAsText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_if: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nullIf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_space: {
      value: cdktn.stringToHclTerraform(struct!.trimSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_logical_type: {
      value: cdktn.stringToHclTerraform(struct!.useLogicalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vectorized_scanner: {
      value: cdktn.stringToHclTerraform(struct!.useVectorizedScanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatParquetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatParquet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryAsText !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAsText = this._binaryAsText;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._nullIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullIf = this._nullIf;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._trimSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimSpace = this._trimSpace;
    }
    if (this._useLogicalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicalType = this._useLogicalType;
    }
    if (this._useVectorizedScanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVectorizedScanner = this._useVectorizedScanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatParquet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryAsText = undefined;
      this._compression = undefined;
      this._nullIf = undefined;
      this._replaceInvalidCharacters = undefined;
      this._trimSpace = undefined;
      this._useLogicalType = undefined;
      this._useVectorizedScanner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryAsText = value.binaryAsText;
      this._compression = value.compression;
      this._nullIf = value.nullIf;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._trimSpace = value.trimSpace;
      this._useLogicalType = value.useLogicalType;
      this._useVectorizedScanner = value.useVectorizedScanner;
    }
  }

  // binary_as_text - computed: false, optional: true, required: false
  private _binaryAsText?: string; 
  public get binaryAsText() {
    return this.getStringAttribute('binary_as_text');
  }
  public set binaryAsText(value: string) {
    this._binaryAsText = value;
  }
  public resetBinaryAsText() {
    this._binaryAsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAsTextInput() {
    return this._binaryAsText;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // null_if - computed: false, optional: true, required: false
  private _nullIf?: string[]; 
  public get nullIf() {
    return this.getListAttribute('null_if');
  }
  public set nullIf(value: string[]) {
    this._nullIf = value;
  }
  public resetNullIf() {
    this._nullIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullIfInput() {
    return this._nullIf;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // trim_space - computed: false, optional: true, required: false
  private _trimSpace?: string; 
  public get trimSpace() {
    return this.getStringAttribute('trim_space');
  }
  public set trimSpace(value: string) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }

  // use_logical_type - computed: false, optional: true, required: false
  private _useLogicalType?: string; 
  public get useLogicalType() {
    return this.getStringAttribute('use_logical_type');
  }
  public set useLogicalType(value: string) {
    this._useLogicalType = value;
  }
  public resetUseLogicalType() {
    this._useLogicalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicalTypeInput() {
    return this._useLogicalType;
  }

  // use_vectorized_scanner - computed: false, optional: true, required: false
  private _useVectorizedScanner?: string; 
  public get useVectorizedScanner() {
    return this.getStringAttribute('use_vectorized_scanner');
  }
  public set useVectorizedScanner(value: string) {
    this._useVectorizedScanner = value;
  }
  public resetUseVectorizedScanner() {
    this._useVectorizedScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVectorizedScannerInput() {
    return this._useVectorizedScanner;
  }
}
export interface StageExternalGcsFileFormatXml {
  /**
  * Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#compression StageExternalGcs#compression}
  */
  readonly compression?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#disable_auto_convert StageExternalGcs#disable_auto_convert}
  */
  readonly disableAutoConvert?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#ignore_utf8_errors StageExternalGcs#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#preserve_space StageExternalGcs#preserve_space}
  */
  readonly preserveSpace?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#replace_invalid_characters StageExternalGcs#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#skip_byte_order_mark StageExternalGcs#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#strip_outer_element StageExternalGcs#strip_outer_element}
  */
  readonly stripOuterElement?: string;
}

export function stageExternalGcsFileFormatXmlToTerraform(struct?: StageExternalGcsFileFormatXmlOutputReference | StageExternalGcsFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    disable_auto_convert: cdktn.stringToTerraform(struct!.disableAutoConvert),
    ignore_utf8_errors: cdktn.stringToTerraform(struct!.ignoreUtf8Errors),
    preserve_space: cdktn.stringToTerraform(struct!.preserveSpace),
    replace_invalid_characters: cdktn.stringToTerraform(struct!.replaceInvalidCharacters),
    skip_byte_order_mark: cdktn.stringToTerraform(struct!.skipByteOrderMark),
    strip_outer_element: cdktn.stringToTerraform(struct!.stripOuterElement),
  }
}


export function stageExternalGcsFileFormatXmlToHclTerraform(struct?: StageExternalGcsFileFormatXmlOutputReference | StageExternalGcsFileFormatXml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_convert: {
      value: cdktn.stringToHclTerraform(struct!.disableAutoConvert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_utf8_errors: {
      value: cdktn.stringToHclTerraform(struct!.ignoreUtf8Errors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_space: {
      value: cdktn.stringToHclTerraform(struct!.preserveSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_invalid_characters: {
      value: cdktn.stringToHclTerraform(struct!.replaceInvalidCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_byte_order_mark: {
      value: cdktn.stringToHclTerraform(struct!.skipByteOrderMark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_outer_element: {
      value: cdktn.stringToHclTerraform(struct!.stripOuterElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatXmlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormatXml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._disableAutoConvert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoConvert = this._disableAutoConvert;
    }
    if (this._ignoreUtf8Errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUtf8Errors = this._ignoreUtf8Errors;
    }
    if (this._preserveSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSpace = this._preserveSpace;
    }
    if (this._replaceInvalidCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidCharacters = this._replaceInvalidCharacters;
    }
    if (this._skipByteOrderMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipByteOrderMark = this._skipByteOrderMark;
    }
    if (this._stripOuterElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripOuterElement = this._stripOuterElement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormatXml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._disableAutoConvert = undefined;
      this._ignoreUtf8Errors = undefined;
      this._preserveSpace = undefined;
      this._replaceInvalidCharacters = undefined;
      this._skipByteOrderMark = undefined;
      this._stripOuterElement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._disableAutoConvert = value.disableAutoConvert;
      this._ignoreUtf8Errors = value.ignoreUtf8Errors;
      this._preserveSpace = value.preserveSpace;
      this._replaceInvalidCharacters = value.replaceInvalidCharacters;
      this._skipByteOrderMark = value.skipByteOrderMark;
      this._stripOuterElement = value.stripOuterElement;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // disable_auto_convert - computed: false, optional: true, required: false
  private _disableAutoConvert?: string; 
  public get disableAutoConvert() {
    return this.getStringAttribute('disable_auto_convert');
  }
  public set disableAutoConvert(value: string) {
    this._disableAutoConvert = value;
  }
  public resetDisableAutoConvert() {
    this._disableAutoConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoConvertInput() {
    return this._disableAutoConvert;
  }

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: string; 
  public get ignoreUtf8Errors() {
    return this.getStringAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: string) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors;
  }

  // preserve_space - computed: false, optional: true, required: false
  private _preserveSpace?: string; 
  public get preserveSpace() {
    return this.getStringAttribute('preserve_space');
  }
  public set preserveSpace(value: string) {
    this._preserveSpace = value;
  }
  public resetPreserveSpace() {
    this._preserveSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSpaceInput() {
    return this._preserveSpace;
  }

  // replace_invalid_characters - computed: false, optional: true, required: false
  private _replaceInvalidCharacters?: string; 
  public get replaceInvalidCharacters() {
    return this.getStringAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: string) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // skip_byte_order_mark - computed: false, optional: true, required: false
  private _skipByteOrderMark?: string; 
  public get skipByteOrderMark() {
    return this.getStringAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: string) {
    this._skipByteOrderMark = value;
  }
  public resetSkipByteOrderMark() {
    this._skipByteOrderMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipByteOrderMarkInput() {
    return this._skipByteOrderMark;
  }

  // strip_outer_element - computed: false, optional: true, required: false
  private _stripOuterElement?: string; 
  public get stripOuterElement() {
    return this.getStringAttribute('strip_outer_element');
  }
  public set stripOuterElement(value: string) {
    this._stripOuterElement = value;
  }
  public resetStripOuterElement() {
    this._stripOuterElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterElementInput() {
    return this._stripOuterElement;
  }
}
export interface StageExternalGcsFileFormat {
  /**
  * Fully qualified name of the file format (e.g., 'database.schema.format_name').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#format_name StageExternalGcs#format_name}
  */
  readonly formatName?: string;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#avro StageExternalGcs#avro}
  */
  readonly avro?: StageExternalGcsFileFormatAvro;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#csv StageExternalGcs#csv}
  */
  readonly csv?: StageExternalGcsFileFormatCsv;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#json StageExternalGcs#json}
  */
  readonly json?: StageExternalGcsFileFormatJson;
  /**
  * orc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#orc StageExternalGcs#orc}
  */
  readonly orc?: StageExternalGcsFileFormatOrc;
  /**
  * parquet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#parquet StageExternalGcs#parquet}
  */
  readonly parquet?: StageExternalGcsFileFormatParquet;
  /**
  * xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#xml StageExternalGcs#xml}
  */
  readonly xml?: StageExternalGcsFileFormatXml;
}

export function stageExternalGcsFileFormatToTerraform(struct?: StageExternalGcsFileFormatOutputReference | StageExternalGcsFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_name: cdktn.stringToTerraform(struct!.formatName),
    avro: stageExternalGcsFileFormatAvroToTerraform(struct!.avro),
    csv: stageExternalGcsFileFormatCsvToTerraform(struct!.csv),
    json: stageExternalGcsFileFormatJsonToTerraform(struct!.json),
    orc: stageExternalGcsFileFormatOrcToTerraform(struct!.orc),
    parquet: stageExternalGcsFileFormatParquetToTerraform(struct!.parquet),
    xml: stageExternalGcsFileFormatXmlToTerraform(struct!.xml),
  }
}


export function stageExternalGcsFileFormatToHclTerraform(struct?: StageExternalGcsFileFormatOutputReference | StageExternalGcsFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_name: {
      value: cdktn.stringToHclTerraform(struct!.formatName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro: {
      value: stageExternalGcsFileFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatAvroList",
    },
    csv: {
      value: stageExternalGcsFileFormatCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatCsvList",
    },
    json: {
      value: stageExternalGcsFileFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatJsonList",
    },
    orc: {
      value: stageExternalGcsFileFormatOrcToHclTerraform(struct!.orc),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatOrcList",
    },
    parquet: {
      value: stageExternalGcsFileFormatParquetToHclTerraform(struct!.parquet),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatParquetList",
    },
    xml: {
      value: stageExternalGcsFileFormatXmlToHclTerraform(struct!.xml),
      isBlock: true,
      type: "list",
      storageClassType: "StageExternalGcsFileFormatXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StageExternalGcsFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatName !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatName = this._formatName;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._orc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orc = this._orc?.internalValue;
    }
    if (this._parquet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquet = this._parquet?.internalValue;
    }
    if (this._xml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xml = this._xml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatName = undefined;
      this._avro.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
      this._orc.internalValue = undefined;
      this._parquet.internalValue = undefined;
      this._xml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatName = value.formatName;
      this._avro.internalValue = value.avro;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
      this._orc.internalValue = value.orc;
      this._parquet.internalValue = value.parquet;
      this._xml.internalValue = value.xml;
    }
  }

  // format_name - computed: false, optional: true, required: false
  private _formatName?: string; 
  public get formatName() {
    return this.getStringAttribute('format_name');
  }
  public set formatName(value: string) {
    this._formatName = value;
  }
  public resetFormatName() {
    this._formatName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatNameInput() {
    return this._formatName;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new StageExternalGcsFileFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: StageExternalGcsFileFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new StageExternalGcsFileFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: StageExternalGcsFileFormatCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new StageExternalGcsFileFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: StageExternalGcsFileFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // orc - computed: false, optional: true, required: false
  private _orc = new StageExternalGcsFileFormatOrcOutputReference(this, "orc");
  public get orc() {
    return this._orc;
  }
  public putOrc(value: StageExternalGcsFileFormatOrc) {
    this._orc.internalValue = value;
  }
  public resetOrc() {
    this._orc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orcInput() {
    return this._orc.internalValue;
  }

  // parquet - computed: false, optional: true, required: false
  private _parquet = new StageExternalGcsFileFormatParquetOutputReference(this, "parquet");
  public get parquet() {
    return this._parquet;
  }
  public putParquet(value: StageExternalGcsFileFormatParquet) {
    this._parquet.internalValue = value;
  }
  public resetParquet() {
    this._parquet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetInput() {
    return this._parquet.internalValue;
  }

  // xml - computed: false, optional: true, required: false
  private _xml = new StageExternalGcsFileFormatXmlOutputReference(this, "xml");
  public get xml() {
    return this._xml;
  }
  public putXml(value: StageExternalGcsFileFormatXml) {
    this._xml.internalValue = value;
  }
  public resetXml() {
    this._xml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml.internalValue;
  }
}
export interface StageExternalGcsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#create StageExternalGcs#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#delete StageExternalGcs#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#read StageExternalGcs#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#update StageExternalGcs#update}
  */
  readonly update?: string;
}

export function stageExternalGcsTimeoutsToTerraform(struct?: StageExternalGcsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function stageExternalGcsTimeoutsToHclTerraform(struct?: StageExternalGcsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StageExternalGcsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StageExternalGcsTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StageExternalGcsTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs snowflake_stage_external_gcs}
*/
export class StageExternalGcs extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stage_external_gcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StageExternalGcs resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageExternalGcs to import
  * @param importFromId The id of the existing StageExternalGcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageExternalGcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_stage_external_gcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/stage_external_gcs snowflake_stage_external_gcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageExternalGcsConfig
  */
  public constructor(scope: Construct, id: string, config: StageExternalGcsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stage_external_gcs',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.15.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._storageIntegration = config.storageIntegration;
    this._url = config.url;
    this._directory.internalValue = config.directory;
    this._encryption.internalValue = config.encryption;
    this._fileFormat.internalValue = config.fileFormat;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new StageExternalGcsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new StageExternalGcsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // stage_type - computed: true, optional: false, required: false
  public get stageType() {
    return this.getStringAttribute('stage_type');
  }

  // storage_integration - computed: false, optional: false, required: true
  private _storageIntegration?: string; 
  public get storageIntegration() {
    return this.getStringAttribute('storage_integration');
  }
  public set storageIntegration(value: string) {
    this._storageIntegration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIntegrationInput() {
    return this._storageIntegration;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new StageExternalGcsDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: StageExternalGcsDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new StageExternalGcsEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: StageExternalGcsEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat = new StageExternalGcsFileFormatOutputReference(this, "file_format");
  public get fileFormat() {
    return this._fileFormat;
  }
  public putFileFormat(value: StageExternalGcsFileFormat) {
    this._fileFormat.internalValue = value;
  }
  public resetFileFormat() {
    this._fileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StageExternalGcsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StageExternalGcsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktn.stringToTerraform(this._comment),
      database: cdktn.stringToTerraform(this._database),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      schema: cdktn.stringToTerraform(this._schema),
      storage_integration: cdktn.stringToTerraform(this._storageIntegration),
      url: cdktn.stringToTerraform(this._url),
      directory: stageExternalGcsDirectoryToTerraform(this._directory.internalValue),
      encryption: stageExternalGcsEncryptionToTerraform(this._encryption.internalValue),
      file_format: stageExternalGcsFileFormatToTerraform(this._fileFormat.internalValue),
      timeouts: stageExternalGcsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_integration: {
        value: cdktn.stringToHclTerraform(this._storageIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: stageExternalGcsDirectoryToHclTerraform(this._directory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalGcsDirectoryList",
      },
      encryption: {
        value: stageExternalGcsEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalGcsEncryptionList",
      },
      file_format: {
        value: stageExternalGcsFileFormatToHclTerraform(this._fileFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StageExternalGcsFileFormatList",
      },
      timeouts: {
        value: stageExternalGcsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StageExternalGcsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
