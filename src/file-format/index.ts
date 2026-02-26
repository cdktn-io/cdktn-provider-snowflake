/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FileFormatConfig extends cdktn.TerraformMetaArguments {
  /**
  * Boolean that specifies to allow duplicate object field names (only the last one will be preserved).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}
  */
  readonly allowDuplicate?: boolean | cdktn.IResolvable;
  /**
  * Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}
  */
  readonly binaryAsText?: boolean | cdktn.IResolvable;
  /**
  * Defines the encoding format for binary input or output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#binary_format FileFormat#binary_format}
  */
  readonly binaryFormat?: string;
  /**
  * Specifies a comment for the file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#comment FileFormat#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the current compression algorithm for the data file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#compression FileFormat#compression}
  */
  readonly compression?: string;
  /**
  * The database in which to create the file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#database FileFormat#database}
  */
  readonly database: string;
  /**
  * Defines the format of date values in the data files (data loading) or table (data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#date_format FileFormat#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}
  */
  readonly disableAutoConvert?: boolean | cdktn.IResolvable;
  /**
  * Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}
  */
  readonly disableSnowflakeData?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}
  */
  readonly emptyFieldAsNull?: boolean | cdktn.IResolvable;
  /**
  * Boolean that enables parsing of octal numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}
  */
  readonly enableOctal?: boolean | cdktn.IResolvable;
  /**
  * String (constant) that specifies the character set of the source data when loading data into a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#encoding FileFormat#encoding}
  */
  readonly encoding?: string;
  /**
  * Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}
  */
  readonly errorOnColumnCountMismatch?: boolean | cdktn.IResolvable;
  /**
  * Single character string used as the escape character for field values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#escape FileFormat#escape}
  */
  readonly escape?: string;
  /**
  * Single character string used as the escape character for unenclosed field values only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}
  */
  readonly escapeUnenclosedField?: string;
  /**
  * Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Character used to enclose strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}
  */
  readonly fieldOptionallyEnclosedBy?: string;
  /**
  * Specifies the extension for files unloaded to a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#file_extension FileFormat#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Specifies the format of the input files (for data loading) or output files (for data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#format_type FileFormat#format_type}
  */
  readonly formatType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#id FileFormat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean that specifies whether UTF-8 encoding errors produce error conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}
  */
  readonly ignoreUtf8Errors?: boolean | cdktn.IResolvable;
  /**
  * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#name FileFormat#name}
  */
  readonly name: string;
  /**
  * String used to convert to and from SQL NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#null_if FileFormat#null_if}
  */
  readonly nullIf?: string[];
  /**
  * Boolean that specifies whether to use the first row headers in the data files to determine column names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#parse_header FileFormat#parse_header}
  */
  readonly parseHeader?: boolean | cdktn.IResolvable;
  /**
  * Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}
  */
  readonly preserveSpace?: boolean | cdktn.IResolvable;
  /**
  * Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}
  */
  readonly recordDelimiter?: string;
  /**
  * Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktn.IResolvable;
  /**
  * The schema in which to create the file format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#schema FileFormat#schema}
  */
  readonly schema: string;
  /**
  * Boolean that specifies to skip any blank lines encountered in the data files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}
  */
  readonly skipBlankLines?: boolean | cdktn.IResolvable;
  /**
  * Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}
  */
  readonly skipByteOrderMark?: boolean | cdktn.IResolvable;
  /**
  * Number of lines at the start of the file to skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#skip_header FileFormat#skip_header}
  */
  readonly skipHeader?: number;
  /**
  * Boolean that instructs the JSON parser to remove object fields or array elements containing null values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}
  */
  readonly stripNullValues?: boolean | cdktn.IResolvable;
  /**
  * Boolean that instructs the JSON parser to remove outer brackets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}
  */
  readonly stripOuterArray?: boolean | cdktn.IResolvable;
  /**
  * Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}
  */
  readonly stripOuterElement?: boolean | cdktn.IResolvable;
  /**
  * Defines the format of time values in the data files (data loading) or table (data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#time_format FileFormat#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Defines the format of timestamp values in the data files (data loading) or table (data unloading).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}
  */
  readonly timestampFormat?: string;
  /**
  * Boolean that specifies whether to remove white space from fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#trim_space FileFormat#trim_space}
  */
  readonly trimSpace?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#timeouts FileFormat#timeouts}
  */
  readonly timeouts?: FileFormatTimeouts;
}
export interface FileFormatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#create FileFormat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#delete FileFormat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#read FileFormat#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#update FileFormat#update}
  */
  readonly update?: string;
}

export function fileFormatTimeoutsToTerraform(struct?: FileFormatTimeouts | cdktn.IResolvable): any {
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


export function fileFormatTimeoutsToHclTerraform(struct?: FileFormatTimeouts | cdktn.IResolvable): any {
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

export class FileFormatTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileFormatTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FileFormatTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format snowflake_file_format}
*/
export class FileFormat extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_file_format";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FileFormat resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileFormat to import
  * @param importFromId The id of the existing FileFormat that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileFormat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_file_format", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/file_format snowflake_file_format} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileFormatConfig
  */
  public constructor(scope: Construct, id: string, config: FileFormatConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_file_format',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.14.0',
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
    this._allowDuplicate = config.allowDuplicate;
    this._binaryAsText = config.binaryAsText;
    this._binaryFormat = config.binaryFormat;
    this._comment = config.comment;
    this._compression = config.compression;
    this._database = config.database;
    this._dateFormat = config.dateFormat;
    this._disableAutoConvert = config.disableAutoConvert;
    this._disableSnowflakeData = config.disableSnowflakeData;
    this._emptyFieldAsNull = config.emptyFieldAsNull;
    this._enableOctal = config.enableOctal;
    this._encoding = config.encoding;
    this._errorOnColumnCountMismatch = config.errorOnColumnCountMismatch;
    this._escape = config.escape;
    this._escapeUnenclosedField = config.escapeUnenclosedField;
    this._fieldDelimiter = config.fieldDelimiter;
    this._fieldOptionallyEnclosedBy = config.fieldOptionallyEnclosedBy;
    this._fileExtension = config.fileExtension;
    this._formatType = config.formatType;
    this._id = config.id;
    this._ignoreUtf8Errors = config.ignoreUtf8Errors;
    this._name = config.name;
    this._nullIf = config.nullIf;
    this._parseHeader = config.parseHeader;
    this._preserveSpace = config.preserveSpace;
    this._recordDelimiter = config.recordDelimiter;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._schema = config.schema;
    this._skipBlankLines = config.skipBlankLines;
    this._skipByteOrderMark = config.skipByteOrderMark;
    this._skipHeader = config.skipHeader;
    this._stripNullValues = config.stripNullValues;
    this._stripOuterArray = config.stripOuterArray;
    this._stripOuterElement = config.stripOuterElement;
    this._timeFormat = config.timeFormat;
    this._timestampFormat = config.timestampFormat;
    this._trimSpace = config.trimSpace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate - computed: false, optional: true, required: false
  private _allowDuplicate?: boolean | cdktn.IResolvable; 
  public get allowDuplicate() {
    return this.getBooleanAttribute('allow_duplicate');
  }
  public set allowDuplicate(value: boolean | cdktn.IResolvable) {
    this._allowDuplicate = value;
  }
  public resetAllowDuplicate() {
    this._allowDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateInput() {
    return this._allowDuplicate;
  }

  // binary_as_text - computed: false, optional: true, required: false
  private _binaryAsText?: boolean | cdktn.IResolvable; 
  public get binaryAsText() {
    return this.getBooleanAttribute('binary_as_text');
  }
  public set binaryAsText(value: boolean | cdktn.IResolvable) {
    this._binaryAsText = value;
  }
  public resetBinaryAsText() {
    this._binaryAsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAsTextInput() {
    return this._binaryAsText;
  }

  // binary_format - computed: true, optional: true, required: false
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

  // compression - computed: true, optional: true, required: false
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

  // date_format - computed: true, optional: true, required: false
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

  // disable_auto_convert - computed: false, optional: true, required: false
  private _disableAutoConvert?: boolean | cdktn.IResolvable; 
  public get disableAutoConvert() {
    return this.getBooleanAttribute('disable_auto_convert');
  }
  public set disableAutoConvert(value: boolean | cdktn.IResolvable) {
    this._disableAutoConvert = value;
  }
  public resetDisableAutoConvert() {
    this._disableAutoConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoConvertInput() {
    return this._disableAutoConvert;
  }

  // disable_snowflake_data - computed: false, optional: true, required: false
  private _disableSnowflakeData?: boolean | cdktn.IResolvable; 
  public get disableSnowflakeData() {
    return this.getBooleanAttribute('disable_snowflake_data');
  }
  public set disableSnowflakeData(value: boolean | cdktn.IResolvable) {
    this._disableSnowflakeData = value;
  }
  public resetDisableSnowflakeData() {
    this._disableSnowflakeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnowflakeDataInput() {
    return this._disableSnowflakeData;
  }

  // empty_field_as_null - computed: false, optional: true, required: false
  private _emptyFieldAsNull?: boolean | cdktn.IResolvable; 
  public get emptyFieldAsNull() {
    return this.getBooleanAttribute('empty_field_as_null');
  }
  public set emptyFieldAsNull(value: boolean | cdktn.IResolvable) {
    this._emptyFieldAsNull = value;
  }
  public resetEmptyFieldAsNull() {
    this._emptyFieldAsNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFieldAsNullInput() {
    return this._emptyFieldAsNull;
  }

  // enable_octal - computed: false, optional: true, required: false
  private _enableOctal?: boolean | cdktn.IResolvable; 
  public get enableOctal() {
    return this.getBooleanAttribute('enable_octal');
  }
  public set enableOctal(value: boolean | cdktn.IResolvable) {
    this._enableOctal = value;
  }
  public resetEnableOctal() {
    this._enableOctal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOctalInput() {
    return this._enableOctal;
  }

  // encoding - computed: true, optional: true, required: false
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
  private _errorOnColumnCountMismatch?: boolean | cdktn.IResolvable; 
  public get errorOnColumnCountMismatch() {
    return this.getBooleanAttribute('error_on_column_count_mismatch');
  }
  public set errorOnColumnCountMismatch(value: boolean | cdktn.IResolvable) {
    this._errorOnColumnCountMismatch = value;
  }
  public resetErrorOnColumnCountMismatch() {
    this._errorOnColumnCountMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnColumnCountMismatchInput() {
    return this._errorOnColumnCountMismatch;
  }

  // escape - computed: true, optional: true, required: false
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

  // escape_unenclosed_field - computed: true, optional: true, required: false
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

  // field_delimiter - computed: true, optional: true, required: false
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

  // field_optionally_enclosed_by - computed: true, optional: true, required: false
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

  // format_type - computed: false, optional: false, required: true
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
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

  // ignore_utf8_errors - computed: false, optional: true, required: false
  private _ignoreUtf8Errors?: boolean | cdktn.IResolvable; 
  public get ignoreUtf8Errors() {
    return this.getBooleanAttribute('ignore_utf8_errors');
  }
  public set ignoreUtf8Errors(value: boolean | cdktn.IResolvable) {
    this._ignoreUtf8Errors = value;
  }
  public resetIgnoreUtf8Errors() {
    this._ignoreUtf8Errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUtf8ErrorsInput() {
    return this._ignoreUtf8Errors;
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

  // null_if - computed: true, optional: true, required: false
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
  private _parseHeader?: boolean | cdktn.IResolvable; 
  public get parseHeader() {
    return this.getBooleanAttribute('parse_header');
  }
  public set parseHeader(value: boolean | cdktn.IResolvable) {
    this._parseHeader = value;
  }
  public resetParseHeader() {
    this._parseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderInput() {
    return this._parseHeader;
  }

  // preserve_space - computed: false, optional: true, required: false
  private _preserveSpace?: boolean | cdktn.IResolvable; 
  public get preserveSpace() {
    return this.getBooleanAttribute('preserve_space');
  }
  public set preserveSpace(value: boolean | cdktn.IResolvable) {
    this._preserveSpace = value;
  }
  public resetPreserveSpace() {
    this._preserveSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSpaceInput() {
    return this._preserveSpace;
  }

  // record_delimiter - computed: true, optional: true, required: false
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
  private _replaceInvalidCharacters?: boolean | cdktn.IResolvable; 
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean | cdktn.IResolvable) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
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

  // skip_blank_lines - computed: false, optional: true, required: false
  private _skipBlankLines?: boolean | cdktn.IResolvable; 
  public get skipBlankLines() {
    return this.getBooleanAttribute('skip_blank_lines');
  }
  public set skipBlankLines(value: boolean | cdktn.IResolvable) {
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
  private _skipByteOrderMark?: boolean | cdktn.IResolvable; 
  public get skipByteOrderMark() {
    return this.getBooleanAttribute('skip_byte_order_mark');
  }
  public set skipByteOrderMark(value: boolean | cdktn.IResolvable) {
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

  // strip_null_values - computed: false, optional: true, required: false
  private _stripNullValues?: boolean | cdktn.IResolvable; 
  public get stripNullValues() {
    return this.getBooleanAttribute('strip_null_values');
  }
  public set stripNullValues(value: boolean | cdktn.IResolvable) {
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
  private _stripOuterArray?: boolean | cdktn.IResolvable; 
  public get stripOuterArray() {
    return this.getBooleanAttribute('strip_outer_array');
  }
  public set stripOuterArray(value: boolean | cdktn.IResolvable) {
    this._stripOuterArray = value;
  }
  public resetStripOuterArray() {
    this._stripOuterArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterArrayInput() {
    return this._stripOuterArray;
  }

  // strip_outer_element - computed: false, optional: true, required: false
  private _stripOuterElement?: boolean | cdktn.IResolvable; 
  public get stripOuterElement() {
    return this.getBooleanAttribute('strip_outer_element');
  }
  public set stripOuterElement(value: boolean | cdktn.IResolvable) {
    this._stripOuterElement = value;
  }
  public resetStripOuterElement() {
    this._stripOuterElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripOuterElementInput() {
    return this._stripOuterElement;
  }

  // time_format - computed: true, optional: true, required: false
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

  // timestamp_format - computed: true, optional: true, required: false
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
  private _trimSpace?: boolean | cdktn.IResolvable; 
  public get trimSpace() {
    return this.getBooleanAttribute('trim_space');
  }
  public set trimSpace(value: boolean | cdktn.IResolvable) {
    this._trimSpace = value;
  }
  public resetTrimSpace() {
    this._trimSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimSpaceInput() {
    return this._trimSpace;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileFormatTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileFormatTimeouts) {
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
      allow_duplicate: cdktn.booleanToTerraform(this._allowDuplicate),
      binary_as_text: cdktn.booleanToTerraform(this._binaryAsText),
      binary_format: cdktn.stringToTerraform(this._binaryFormat),
      comment: cdktn.stringToTerraform(this._comment),
      compression: cdktn.stringToTerraform(this._compression),
      database: cdktn.stringToTerraform(this._database),
      date_format: cdktn.stringToTerraform(this._dateFormat),
      disable_auto_convert: cdktn.booleanToTerraform(this._disableAutoConvert),
      disable_snowflake_data: cdktn.booleanToTerraform(this._disableSnowflakeData),
      empty_field_as_null: cdktn.booleanToTerraform(this._emptyFieldAsNull),
      enable_octal: cdktn.booleanToTerraform(this._enableOctal),
      encoding: cdktn.stringToTerraform(this._encoding),
      error_on_column_count_mismatch: cdktn.booleanToTerraform(this._errorOnColumnCountMismatch),
      escape: cdktn.stringToTerraform(this._escape),
      escape_unenclosed_field: cdktn.stringToTerraform(this._escapeUnenclosedField),
      field_delimiter: cdktn.stringToTerraform(this._fieldDelimiter),
      field_optionally_enclosed_by: cdktn.stringToTerraform(this._fieldOptionallyEnclosedBy),
      file_extension: cdktn.stringToTerraform(this._fileExtension),
      format_type: cdktn.stringToTerraform(this._formatType),
      id: cdktn.stringToTerraform(this._id),
      ignore_utf8_errors: cdktn.booleanToTerraform(this._ignoreUtf8Errors),
      name: cdktn.stringToTerraform(this._name),
      null_if: cdktn.listMapper(cdktn.stringToTerraform, false)(this._nullIf),
      parse_header: cdktn.booleanToTerraform(this._parseHeader),
      preserve_space: cdktn.booleanToTerraform(this._preserveSpace),
      record_delimiter: cdktn.stringToTerraform(this._recordDelimiter),
      replace_invalid_characters: cdktn.booleanToTerraform(this._replaceInvalidCharacters),
      schema: cdktn.stringToTerraform(this._schema),
      skip_blank_lines: cdktn.booleanToTerraform(this._skipBlankLines),
      skip_byte_order_mark: cdktn.booleanToTerraform(this._skipByteOrderMark),
      skip_header: cdktn.numberToTerraform(this._skipHeader),
      strip_null_values: cdktn.booleanToTerraform(this._stripNullValues),
      strip_outer_array: cdktn.booleanToTerraform(this._stripOuterArray),
      strip_outer_element: cdktn.booleanToTerraform(this._stripOuterElement),
      time_format: cdktn.stringToTerraform(this._timeFormat),
      timestamp_format: cdktn.stringToTerraform(this._timestampFormat),
      trim_space: cdktn.booleanToTerraform(this._trimSpace),
      timeouts: fileFormatTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate: {
        value: cdktn.booleanToHclTerraform(this._allowDuplicate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binary_as_text: {
        value: cdktn.booleanToHclTerraform(this._binaryAsText),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binary_format: {
        value: cdktn.stringToHclTerraform(this._binaryFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktn.stringToHclTerraform(this._compression),
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
      date_format: {
        value: cdktn.stringToHclTerraform(this._dateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_auto_convert: {
        value: cdktn.booleanToHclTerraform(this._disableAutoConvert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_snowflake_data: {
        value: cdktn.booleanToHclTerraform(this._disableSnowflakeData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      empty_field_as_null: {
        value: cdktn.booleanToHclTerraform(this._emptyFieldAsNull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_octal: {
        value: cdktn.booleanToHclTerraform(this._enableOctal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encoding: {
        value: cdktn.stringToHclTerraform(this._encoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_on_column_count_mismatch: {
        value: cdktn.booleanToHclTerraform(this._errorOnColumnCountMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escape: {
        value: cdktn.stringToHclTerraform(this._escape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      escape_unenclosed_field: {
        value: cdktn.stringToHclTerraform(this._escapeUnenclosedField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_delimiter: {
        value: cdktn.stringToHclTerraform(this._fieldDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_optionally_enclosed_by: {
        value: cdktn.stringToHclTerraform(this._fieldOptionallyEnclosedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension: {
        value: cdktn.stringToHclTerraform(this._fileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_type: {
        value: cdktn.stringToHclTerraform(this._formatType),
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
      ignore_utf8_errors: {
        value: cdktn.booleanToHclTerraform(this._ignoreUtf8Errors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      null_if: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._nullIf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parse_header: {
        value: cdktn.booleanToHclTerraform(this._parseHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserve_space: {
        value: cdktn.booleanToHclTerraform(this._preserveSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      record_delimiter: {
        value: cdktn.stringToHclTerraform(this._recordDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replace_invalid_characters: {
        value: cdktn.booleanToHclTerraform(this._replaceInvalidCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_blank_lines: {
        value: cdktn.booleanToHclTerraform(this._skipBlankLines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_byte_order_mark: {
        value: cdktn.booleanToHclTerraform(this._skipByteOrderMark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_header: {
        value: cdktn.numberToHclTerraform(this._skipHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strip_null_values: {
        value: cdktn.booleanToHclTerraform(this._stripNullValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strip_outer_array: {
        value: cdktn.booleanToHclTerraform(this._stripOuterArray),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strip_outer_element: {
        value: cdktn.booleanToHclTerraform(this._stripOuterElement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_format: {
        value: cdktn.stringToHclTerraform(this._timeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_format: {
        value: cdktn.stringToHclTerraform(this._timestampFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trim_space: {
        value: cdktn.booleanToHclTerraform(this._trimSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: fileFormatTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileFormatTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
