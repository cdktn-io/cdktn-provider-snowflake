# `fileFormatCsv` Submodule <a name="`fileFormatCsv` Submodule" id="@cdktn/provider-snowflake.fileFormatCsv"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatCsv <a name="FileFormatCsv" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv snowflake_file_format_csv}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsv(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  empty_field_as_null: str = None,
  encoding: str = None,
  error_on_column_count_mismatch: str = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  id: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  parse_header: str = None,
  record_delimiter: str = None,
  replace_invalid_characters: str = None,
  skip_blank_lines: str = None,
  skip_byte_order_mark: str = None,
  skip_header: typing.Union[int, float] = None,
  time_format: str = None,
  timeouts: FileFormatCsvTimeouts = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.parseHeader">parse_header</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.recordDelimiter">record_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#database FileFormatCsv#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#name FileFormatCsv#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#schema FileFormatCsv#schema}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#binary_format FileFormatCsv#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#comment FileFormatCsv#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.compression"></a>

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#compression FileFormatCsv#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#date_format FileFormatCsv#date_format}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.emptyFieldAsNull"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#empty_field_as_null FileFormatCsv#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.encoding"></a>

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#encoding FileFormatCsv#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.errorOnColumnCountMismatch"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#error_on_column_count_mismatch FileFormatCsv#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.escape"></a>

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape FileFormatCsv#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.escapeUnenclosedField"></a>

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape_unenclosed_field FileFormatCsv#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fieldDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_delimiter FileFormatCsv#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_optionally_enclosed_by FileFormatCsv#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#file_extension FileFormatCsv#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.multiLine"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#multi_line FileFormatCsv#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#null_if FileFormatCsv#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.parseHeader"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#parse_header FileFormatCsv#parse_header}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.recordDelimiter"></a>

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#record_delimiter FileFormatCsv#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#replace_invalid_characters FileFormatCsv#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipBlankLines"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_blank_lines FileFormatCsv#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipByteOrderMark"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_byte_order_mark FileFormatCsv#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.skipHeader"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_header FileFormatCsv#skip_header}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#time_format FileFormatCsv#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timeouts FileFormatCsv#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timestamp_format FileFormatCsv#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.trimSpace"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#trim_space FileFormatCsv#trim_space}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEmptyFieldAsNull">reset_empty_field_as_null</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetErrorOnColumnCountMismatch">reset_error_on_column_count_mismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscape">reset_escape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscapeUnenclosedField">reset_escape_unenclosed_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldOptionallyEnclosedBy">reset_field_optionally_enclosed_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetMultiLine">reset_multi_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetParseHeader">reset_parse_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipBlankLines">reset_skip_blank_lines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipHeader">reset_skip_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#create FileFormatCsv#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#read FileFormatCsv#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#update FileFormatCsv#update}.

---

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_empty_field_as_null` <a name="reset_empty_field_as_null" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEmptyFieldAsNull"></a>

```python
def reset_empty_field_as_null() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_error_on_column_count_mismatch` <a name="reset_error_on_column_count_mismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetErrorOnColumnCountMismatch"></a>

```python
def reset_error_on_column_count_mismatch() -> None
```

##### `reset_escape` <a name="reset_escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscape"></a>

```python
def reset_escape() -> None
```

##### `reset_escape_unenclosed_field` <a name="reset_escape_unenclosed_field" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscapeUnenclosedField"></a>

```python
def reset_escape_unenclosed_field() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_optionally_enclosed_by` <a name="reset_field_optionally_enclosed_by" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldOptionallyEnclosedBy"></a>

```python
def reset_field_optionally_enclosed_by() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multi_line` <a name="reset_multi_line" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetMultiLine"></a>

```python
def reset_multi_line() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_parse_header` <a name="reset_parse_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetParseHeader"></a>

```python
def reset_parse_header() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_blank_lines` <a name="reset_skip_blank_lines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipBlankLines"></a>

```python
def reset_skip_blank_lines() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_skip_header` <a name="reset_skip_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipHeader"></a>

```python
def reset_skip_header() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FileFormatCsv resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsv.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsv.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsv.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsv.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FileFormatCsv resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileFormatCsv to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileFormatCsv that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatCsv to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput">empty_field_as_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput">error_on_column_count_mismatch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput">escape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput">escape_unenclosed_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput">field_optionally_enclosed_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput">multi_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput">parse_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput">skip_blank_lines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput">skip_header_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput">trim_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine">multi_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader">parse_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace">trim_space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput"></a>

```python
describe_output: FileFormatCsvDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput"></a>

```python
show_output: FileFormatCsvShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts"></a>

```python
timeouts: FileFormatCsvTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `empty_field_as_null_input`<sup>Optional</sup> <a name="empty_field_as_null_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput"></a>

```python
empty_field_as_null_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch_input`<sup>Optional</sup> <a name="error_on_column_count_mismatch_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput"></a>

```python
error_on_column_count_mismatch_input: str
```

- *Type:* str

---

##### `escape_input`<sup>Optional</sup> <a name="escape_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput"></a>

```python
escape_input: str
```

- *Type:* str

---

##### `escape_unenclosed_field_input`<sup>Optional</sup> <a name="escape_unenclosed_field_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput"></a>

```python
escape_unenclosed_field_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by_input`<sup>Optional</sup> <a name="field_optionally_enclosed_by_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput"></a>

```python
field_optionally_enclosed_by_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_line_input`<sup>Optional</sup> <a name="multi_line_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput"></a>

```python
multi_line_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header_input`<sup>Optional</sup> <a name="parse_header_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput"></a>

```python
parse_header_input: str
```

- *Type:* str

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `skip_blank_lines_input`<sup>Optional</sup> <a name="skip_blank_lines_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput"></a>

```python
skip_blank_lines_input: str
```

- *Type:* str

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: str
```

- *Type:* str

---

##### `skip_header_input`<sup>Optional</sup> <a name="skip_header_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput"></a>

```python
skip_header_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FileFormatCsvTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput"></a>

```python
trim_space_input: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatCsvConfig <a name="FileFormatCsvConfig" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  empty_field_as_null: str = None,
  encoding: str = None,
  error_on_column_count_mismatch: str = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  id: str = None,
  multi_line: str = None,
  null_if: typing.List[str] = None,
  parse_header: str = None,
  record_delimiter: str = None,
  replace_invalid_characters: str = None,
  skip_blank_lines: str = None,
  skip_byte_order_mark: str = None,
  skip_header: typing.Union[int, float] = None,
  time_format: str = None,
  timeouts: FileFormatCsvTimeouts = None,
  timestamp_format: str = None,
  trim_space: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression">compression</a></code> | <code>str</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding">encoding</a></code> | <code>str</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine">multi_line</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader">parse_header</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines">skip_blank_lines</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace">trim_space</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#database FileFormatCsv#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#name FileFormatCsv#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#schema FileFormatCsv#schema}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#binary_format FileFormatCsv#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#comment FileFormatCsv#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#compression FileFormatCsv#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#date_format FileFormatCsv#date_format}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#empty_field_as_null FileFormatCsv#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#encoding FileFormatCsv#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#error_on_column_count_mismatch FileFormatCsv#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape"></a>

```python
escape: str
```

- *Type:* str

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape FileFormatCsv#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape_unenclosed_field FileFormatCsv#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_delimiter FileFormatCsv#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_optionally_enclosed_by FileFormatCsv#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#file_extension FileFormatCsv#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_line`<sup>Optional</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine"></a>

```python
multi_line: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#multi_line FileFormatCsv#multi_line}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#null_if FileFormatCsv#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader"></a>

```python
parse_header: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#parse_header FileFormatCsv#parse_header}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#record_delimiter FileFormatCsv#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#replace_invalid_characters FileFormatCsv#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines"></a>

```python
skip_blank_lines: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_blank_lines FileFormatCsv#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_byte_order_mark FileFormatCsv#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_header FileFormatCsv#skip_header}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#time_format FileFormatCsv#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts"></a>

```python
timeouts: FileFormatCsvTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timeouts FileFormatCsv#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timestamp_format FileFormatCsv#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace"></a>

```python
trim_space: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#trim_space FileFormatCsv#trim_space}

---

### FileFormatCsvDescribeOutput <a name="FileFormatCsvDescribeOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvDescribeOutput()
```


### FileFormatCsvShowOutput <a name="FileFormatCsvShowOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvShowOutput()
```


### FileFormatCsvTimeouts <a name="FileFormatCsvTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#create FileFormatCsv#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#read FileFormatCsv#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#update FileFormatCsv#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#create FileFormatCsv#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#read FileFormatCsv#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#update FileFormatCsv#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatCsvDescribeOutputList <a name="FileFormatCsvDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileFormatCsvDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FileFormatCsvDescribeOutputOutputReference <a name="FileFormatCsvDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine">multi_line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader">parse_header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines">skip_blank_lines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace">trim_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8">validate_utf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_line`<sup>Required</sup> <a name="multi_line" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine"></a>

```python
multi_line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader"></a>

```python
parse_header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines"></a>

```python
skip_blank_lines: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace"></a>

```python
trim_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate_utf8`<sup>Required</sup> <a name="validate_utf8" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8"></a>

```python
validate_utf8: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: FileFormatCsvDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a>

---


### FileFormatCsvShowOutputList <a name="FileFormatCsvShowOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileFormatCsvShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FileFormatCsvShowOutputOutputReference <a name="FileFormatCsvShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions">format_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions"></a>

```python
format_options: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: FileFormatCsvShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a>

---


### FileFormatCsvTimeoutsOutputReference <a name="FileFormatCsvTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import file_format_csv

fileFormatCsv.FileFormatCsvTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FileFormatCsvTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---



