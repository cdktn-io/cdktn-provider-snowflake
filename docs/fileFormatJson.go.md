# `fileFormatJson` Submodule <a name="`fileFormatJson` Submodule" id="@cdktn/provider-snowflake.fileFormatJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatJson <a name="FileFormatJson" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json snowflake_file_format_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJson(scope Construct, id *string, config FileFormatJsonConfig) FileFormatJson
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig">FileFormatJsonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig">FileFormatJsonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate">ResetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal">ResetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine">ResetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues">ResetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray">ResetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts"></a>

```go
func PutTimeouts(value FileFormatJsonTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate"></a>

```go
func ResetAllowDuplicate()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal"></a>

```go
func ResetEnableOctal()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine"></a>

```go
func ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues"></a>

```go
func ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray"></a>

```go
func ResetStripOuterArray()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.FileFormatJson_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.FileFormatJson_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.FileFormatJson_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.FileFormatJson_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FileFormatJson to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FileFormatJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput">EnableOctalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput">MultiLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine">MultiLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput"></a>

```go
func DescribeOutput() FileFormatJsonDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput"></a>

```go
func ShowOutput() FileFormatJsonShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts"></a>

```go
func Timeouts() FileFormatJsonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput"></a>

```go
func AllowDuplicateInput() *string
```

- *Type:* *string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput"></a>

```go
func EnableOctalInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() *string
```

- *Type:* *string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput"></a>

```go
func MultiLineInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() *string
```

- *Type:* *string

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput"></a>

```go
func StripNullValuesInput() *string
```

- *Type:* *string

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput"></a>

```go
func StripOuterArrayInput() *string
```

- *Type:* *string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate"></a>

```go
func AllowDuplicate() *string
```

- *Type:* *string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal"></a>

```go
func EnableOctal() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() *string
```

- *Type:* *string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine"></a>

```go
func MultiLine() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() *string
```

- *Type:* *string

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues"></a>

```go
func StripNullValues() *string
```

- *Type:* *string

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray"></a>

```go
func StripOuterArray() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace"></a>

```go
func TrimSpace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatJsonConfig <a name="FileFormatJsonConfig" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

&fileformatjson.FileFormatJsonConfig {
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
	AllowDuplicate: *string,
	BinaryFormat: *string,
	Comment: *string,
	Compression: *string,
	DateFormat: *string,
	EnableOctal: *string,
	FileExtension: *string,
	Id: *string,
	IgnoreUtf8Errors: *string,
	MultiLine: *string,
	NullIf: *[]*string,
	ReplaceInvalidCharacters: *string,
	SkipByteOrderMark: *string,
	StripNullValues: *string,
	StripOuterArray: *string,
	TimeFormat: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.fileFormatJson.FileFormatJsonTimeouts,
	TimestampFormat: *string,
	TrimSpace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate">AllowDuplicate</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression">Compression</a></code> | <code>*string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal">EnableOctal</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#id FileFormatJson#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine">MultiLine</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues">StripNullValues</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray">StripOuterArray</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace">TrimSpace</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#database FileFormatJson#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#name FileFormatJson#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#schema FileFormatJson#schema}

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate"></a>

```go
AllowDuplicate *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#comment FileFormatJson#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#compression FileFormatJson#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal"></a>

```go
EnableOctal *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#id FileFormatJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine"></a>

```go
MultiLine *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues"></a>

```go
StripNullValues *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray"></a>

```go
StripOuterArray *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts"></a>

```go
Timeouts FileFormatJsonTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace"></a>

```go
TrimSpace *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}

---

### FileFormatJsonDescribeOutput <a name="FileFormatJsonDescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

&fileformatjson.FileFormatJsonDescribeOutput {

}
```


### FileFormatJsonShowOutput <a name="FileFormatJsonShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

&fileformatjson.FileFormatJsonShowOutput {

}
```


### FileFormatJsonTimeouts <a name="FileFormatJsonTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

&fileformatjson.FileFormatJsonTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#create FileFormatJson#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#delete FileFormatJson#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#read FileFormatJson#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#update FileFormatJson#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#create FileFormatJson#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#delete FileFormatJson#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#read FileFormatJson#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_json#update FileFormatJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatJsonDescribeOutputList <a name="FileFormatJsonDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJsonDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileFormatJsonDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get"></a>

```go
func Get(index *f64) FileFormatJsonDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FileFormatJsonDescribeOutputOutputReference <a name="FileFormatJsonDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJsonDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileFormatJsonDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal">EnableOctal</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine">MultiLine</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace">TrimSpace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate"></a>

```go
func AllowDuplicate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal"></a>

```go
func EnableOctal() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine"></a>

```go
func MultiLine() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues"></a>

```go
func StripNullValues() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray"></a>

```go
func StripOuterArray() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace"></a>

```go
func TrimSpace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FileFormatJsonDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a>

---


### FileFormatJsonShowOutputList <a name="FileFormatJsonShowOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJsonShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileFormatJsonShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get"></a>

```go
func Get(index *f64) FileFormatJsonShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FileFormatJsonShowOutputOutputReference <a name="FileFormatJsonShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJsonShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileFormatJsonShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions">FormatOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions"></a>

```go
func FormatOptions() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FileFormatJsonShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a>

---


### FileFormatJsonTimeoutsOutputReference <a name="FileFormatJsonTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/fileformatjson"

fileformatjson.NewFileFormatJsonTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileFormatJsonTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



