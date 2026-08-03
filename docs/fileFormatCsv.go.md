# `fileFormatCsv` Submodule <a name="`fileFormatCsv` Submodule" id="@cdktn/provider-snowflake.fileFormatCsv"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatCsv <a name="FileFormatCsv" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv snowflake_file_format_csv}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsv(scope Construct, id *string, config FileFormatCsvConfig) FileFormatCsv
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig">FileFormatCsvConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig">FileFormatCsvConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEmptyFieldAsNull">ResetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetErrorOnColumnCountMismatch">ResetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscape">ResetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscapeUnenclosedField">ResetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldOptionallyEnclosedBy">ResetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetParseHeader">ResetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipBlankLines">ResetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipHeader">ResetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts"></a>

```go
func PutTimeouts(value FileFormatCsvTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEmptyFieldAsNull"></a>

```go
func ResetEmptyFieldAsNull()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetErrorOnColumnCountMismatch"></a>

```go
func ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscape"></a>

```go
func ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscapeUnenclosedField"></a>

```go
func ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldOptionallyEnclosedBy"></a>

```go
func ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetId"></a>

```go
func ResetId()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetParseHeader` <a name="ResetParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetParseHeader"></a>

```go
func ResetParseHeader()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipBlankLines"></a>

```go
func ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipHeader"></a>

```go
func ResetSkipHeader()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FileFormatCsv resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.FileFormatCsv_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.FileFormatCsv_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.FileFormatCsv_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.FileFormatCsv_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FileFormatCsv resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FileFormatCsv to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FileFormatCsv that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatCsv to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput">EscapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput">ParseHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput"></a>

```go
func DescribeOutput() FileFormatCsvDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput"></a>

```go
func ShowOutput() FileFormatCsvShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts"></a>

```go
func Timeouts() FileFormatCsvTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput"></a>

```go
func EmptyFieldAsNullInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput"></a>

```go
func ErrorOnColumnCountMismatchInput() *string
```

- *Type:* *string

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput"></a>

```go
func EscapeInput() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput"></a>

```go
func EscapeUnenclosedFieldInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput"></a>

```go
func FieldOptionallyEnclosedByInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeaderInput`<sup>Optional</sup> <a name="ParseHeaderInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput"></a>

```go
func ParseHeaderInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput"></a>

```go
func SkipBlankLinesInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput"></a>

```go
func SkipHeaderInput() *f64
```

- *Type:* *f64

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() *string
```

- *Type:* *string

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader"></a>

```go
func ParseHeader() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines"></a>

```go
func SkipBlankLines() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatCsvConfig <a name="FileFormatCsvConfig" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

&fileformatcsv.FileFormatCsvConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Name: *string,
	Schema: *string,
	BinaryFormat: *string,
	Comment: *string,
	Compression: *string,
	DateFormat: *string,
	EmptyFieldAsNull: *string,
	Encoding: *string,
	ErrorOnColumnCountMismatch: *string,
	Escape: *string,
	EscapeUnenclosedField: *string,
	FieldDelimiter: *string,
	FieldOptionallyEnclosedBy: *string,
	FileExtension: *string,
	Id: *string,
	MultiLine: *string,
	NullIf: *[]*string,
	ParseHeader: *string,
	RecordDelimiter: *string,
	ReplaceInvalidCharacters: *string,
	SkipBlankLines: *string,
	SkipByteOrderMark: *string,
	SkipHeader: *f64,
	TimeFormat: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.fileFormatCsv.FileFormatCsvTimeouts,
	TimestampFormat: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding">Encoding</a></code> | <code>*string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape">Escape</a></code> | <code>*string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#id FileFormatCsv#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader">ParseHeader</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines">SkipBlankLines</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#database FileFormatCsv#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#name FileFormatCsv#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#schema FileFormatCsv#schema}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#binary_format FileFormatCsv#binary_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#comment FileFormatCsv#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#compression FileFormatCsv#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#date_format FileFormatCsv#date_format}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull"></a>

```go
EmptyFieldAsNull *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#empty_field_as_null FileFormatCsv#empty_field_as_null}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#encoding FileFormatCsv#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch"></a>

```go
ErrorOnColumnCountMismatch *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#error_on_column_count_mismatch FileFormatCsv#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape"></a>

```go
Escape *string
```

- *Type:* *string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#escape FileFormatCsv#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField"></a>

```go
EscapeUnenclosedField *string
```

- *Type:* *string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#escape_unenclosed_field FileFormatCsv#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#field_delimiter FileFormatCsv#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy"></a>

```go
FieldOptionallyEnclosedBy *string
```

- *Type:* *string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#field_optionally_enclosed_by FileFormatCsv#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#file_extension FileFormatCsv#file_extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#id FileFormatCsv#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#multi_line FileFormatCsv#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#null_if FileFormatCsv#null_if}

---

##### `ParseHeader`<sup>Optional</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader"></a>

```go
ParseHeader *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#parse_header FileFormatCsv#parse_header}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#record_delimiter FileFormatCsv#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#replace_invalid_characters FileFormatCsv#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines"></a>

```go
SkipBlankLines *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#skip_blank_lines FileFormatCsv#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#skip_byte_order_mark FileFormatCsv#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader"></a>

```go
SkipHeader *f64
```

- *Type:* *f64

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#skip_header FileFormatCsv#skip_header}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#time_format FileFormatCsv#time_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts"></a>

```go
Timeouts FileFormatCsvTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#timeouts FileFormatCsv#timeouts}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#timestamp_format FileFormatCsv#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#trim_space FileFormatCsv#trim_space}

---

### FileFormatCsvDescribeOutput <a name="FileFormatCsvDescribeOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

&fileformatcsv.FileFormatCsvDescribeOutput {

}
```


### FileFormatCsvShowOutput <a name="FileFormatCsvShowOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

&fileformatcsv.FileFormatCsvShowOutput {

}
```


### FileFormatCsvTimeouts <a name="FileFormatCsvTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

&fileformatcsv.FileFormatCsvTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#create FileFormatCsv#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#read FileFormatCsv#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#update FileFormatCsv#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#create FileFormatCsv#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#read FileFormatCsv#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_csv#update FileFormatCsv#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatCsvDescribeOutputList <a name="FileFormatCsvDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsvDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileFormatCsvDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get"></a>

```go
func Get(index *f64) FileFormatCsvDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FileFormatCsvDescribeOutputOutputReference <a name="FileFormatCsvDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsvDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileFormatCsvDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader">ParseHeader</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8">ValidateUtf8</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader"></a>

```go
func ParseHeader() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines"></a>

```go
func SkipBlankLines() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidateUtf8`<sup>Required</sup> <a name="ValidateUtf8" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8"></a>

```go
func ValidateUtf8() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FileFormatCsvDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a>

---


### FileFormatCsvShowOutputList <a name="FileFormatCsvShowOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsvShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileFormatCsvShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get"></a>

```go
func Get(index *f64) FileFormatCsvShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FileFormatCsvShowOutputOutputReference <a name="FileFormatCsvShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsvShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileFormatCsvShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions">FormatOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions"></a>

```go
func FormatOptions() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FileFormatCsvShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a>

---


### FileFormatCsvTimeoutsOutputReference <a name="FileFormatCsvTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/fileformatcsv"

fileformatcsv.NewFileFormatCsvTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileFormatCsvTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



