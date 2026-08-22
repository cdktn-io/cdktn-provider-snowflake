# `fileFormatCsv` Submodule <a name="`fileFormatCsv` Submodule" id="@cdktn/provider-snowflake.fileFormatCsv"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatCsv <a name="FileFormatCsv" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv snowflake_file_format_csv}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsv(Construct Scope, string Id, FileFormatCsvConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig">FileFormatCsvConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts"></a>

```csharp
private void PutTimeouts(FileFormatCsvTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetBinaryFormat"></a>

```csharp
private void ResetBinaryFormat()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetDateFormat"></a>

```csharp
private void ResetDateFormat()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEmptyFieldAsNull"></a>

```csharp
private void ResetEmptyFieldAsNull()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetErrorOnColumnCountMismatch"></a>

```csharp
private void ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscape"></a>

```csharp
private void ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetEscapeUnenclosedField"></a>

```csharp
private void ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFieldOptionallyEnclosedBy"></a>

```csharp
private void ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetFileExtension"></a>

```csharp
private void ResetFileExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetMultiLine"></a>

```csharp
private void ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetNullIf"></a>

```csharp
private void ResetNullIf()
```

##### `ResetParseHeader` <a name="ResetParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetParseHeader"></a>

```csharp
private void ResetParseHeader()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetRecordDelimiter"></a>

```csharp
private void ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipBlankLines"></a>

```csharp
private void ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipByteOrderMark"></a>

```csharp
private void ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetSkipHeader"></a>

```csharp
private void ResetSkipHeader()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeFormat"></a>

```csharp
private void ResetTimeFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.resetTrimSpace"></a>

```csharp
private void ResetTrimSpace()
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

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatCsv.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatCsv.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatCsv.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatCsv.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FileFormatCsv resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileFormatCsv to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileFormatCsv that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatCsv to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput">DateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput">EscapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput">FileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput">MultiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput">NullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput">ParseHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput">TimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape">Escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension">FileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine">MultiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf">NullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader">ParseHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter">RecordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines">SkipBlankLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader">SkipHeader</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace">TrimSpace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.describeOutput"></a>

```csharp
public FileFormatCsvDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList">FileFormatCsvDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.showOutput"></a>

```csharp
public FileFormatCsvShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList">FileFormatCsvShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeouts"></a>

```csharp
public FileFormatCsvTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference">FileFormatCsvTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormatInput"></a>

```csharp
public string BinaryFormatInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormatInput"></a>

```csharp
public string DateFormatInput { get; }
```

- *Type:* string

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNullInput"></a>

```csharp
public string EmptyFieldAsNullInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatchInput"></a>

```csharp
public string ErrorOnColumnCountMismatchInput { get; }
```

- *Type:* string

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeInput"></a>

```csharp
public string EscapeInput { get; }
```

- *Type:* string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedFieldInput"></a>

```csharp
public string EscapeUnenclosedFieldInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedByInput"></a>

```csharp
public string FieldOptionallyEnclosedByInput { get; }
```

- *Type:* string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtensionInput"></a>

```csharp
public string FileExtensionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLineInput"></a>

```csharp
public string MultiLineInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIfInput"></a>

```csharp
public string[] NullIfInput { get; }
```

- *Type:* string[]

---

##### `ParseHeaderInput`<sup>Optional</sup> <a name="ParseHeaderInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeaderInput"></a>

```csharp
public string ParseHeaderInput { get; }
```

- *Type:* string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiterInput"></a>

```csharp
public string RecordDelimiterInput { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharactersInput"></a>

```csharp
public string ReplaceInvalidCharactersInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLinesInput"></a>

```csharp
public string SkipBlankLinesInput { get; }
```

- *Type:* string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMarkInput"></a>

```csharp
public string SkipByteOrderMarkInput { get; }
```

- *Type:* string

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeaderInput"></a>

```csharp
public double SkipHeaderInput { get; }
```

- *Type:* double

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormatInput"></a>

```csharp
public string TimeFormatInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeoutsInput"></a>

```csharp
public IResolvable|FileFormatCsvTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpaceInput"></a>

```csharp
public string TrimSpaceInput { get; }
```

- *Type:* string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.emptyFieldAsNull"></a>

```csharp
public string EmptyFieldAsNull { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.errorOnColumnCountMismatch"></a>

```csharp
public string ErrorOnColumnCountMismatch { get; }
```

- *Type:* string

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escape"></a>

```csharp
public string Escape { get; }
```

- *Type:* string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.escapeUnenclosedField"></a>

```csharp
public string EscapeUnenclosedField { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```csharp
public string FieldOptionallyEnclosedBy { get; }
```

- *Type:* string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.fileExtension"></a>

```csharp
public string FileExtension { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.multiLine"></a>

```csharp
public string MultiLine { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.nullIf"></a>

```csharp
public string[] NullIf { get; }
```

- *Type:* string[]

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.parseHeader"></a>

```csharp
public string ParseHeader { get; }
```

- *Type:* string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.recordDelimiter"></a>

```csharp
public string RecordDelimiter { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipBlankLines"></a>

```csharp
public string SkipBlankLines { get; }
```

- *Type:* string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; }
```

- *Type:* string

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.skipHeader"></a>

```csharp
public double SkipHeader { get; }
```

- *Type:* double

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.trimSpace"></a>

```csharp
public string TrimSpace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsv.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatCsvConfig <a name="FileFormatCsvConfig" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string BinaryFormat = null,
    string Comment = null,
    string Compression = null,
    string DateFormat = null,
    string EmptyFieldAsNull = null,
    string Encoding = null,
    string ErrorOnColumnCountMismatch = null,
    string Escape = null,
    string EscapeUnenclosedField = null,
    string FieldDelimiter = null,
    string FieldOptionallyEnclosedBy = null,
    string FileExtension = null,
    string Id = null,
    string MultiLine = null,
    string[] NullIf = null,
    string ParseHeader = null,
    string RecordDelimiter = null,
    string ReplaceInvalidCharacters = null,
    string SkipBlankLines = null,
    string SkipByteOrderMark = null,
    double SkipHeader = null,
    string TimeFormat = null,
    FileFormatCsvTimeouts Timeouts = null,
    string TimestampFormat = null,
    string TrimSpace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression">Compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat">DateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding">Encoding</a></code> | <code>string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape">Escape</a></code> | <code>string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension">FileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine">MultiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf">NullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader">ParseHeader</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter">RecordDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines">SkipBlankLines</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader">SkipHeader</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat">TimeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace">TrimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#database FileFormatCsv#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#name FileFormatCsv#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#schema FileFormatCsv#schema}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; set; }
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#binary_format FileFormatCsv#binary_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#comment FileFormatCsv#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#compression FileFormatCsv#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.dateFormat"></a>

```csharp
public string DateFormat { get; set; }
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#date_format FileFormatCsv#date_format}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.emptyFieldAsNull"></a>

```csharp
public string EmptyFieldAsNull { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#empty_field_as_null FileFormatCsv#empty_field_as_null}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#encoding FileFormatCsv#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.errorOnColumnCountMismatch"></a>

```csharp
public string ErrorOnColumnCountMismatch { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#error_on_column_count_mismatch FileFormatCsv#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escape"></a>

```csharp
public string Escape { get; set; }
```

- *Type:* string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape FileFormatCsv#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.escapeUnenclosedField"></a>

```csharp
public string EscapeUnenclosedField { get; set; }
```

- *Type:* string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#escape_unenclosed_field FileFormatCsv#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_delimiter FileFormatCsv#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fieldOptionallyEnclosedBy"></a>

```csharp
public string FieldOptionallyEnclosedBy { get; set; }
```

- *Type:* string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#field_optionally_enclosed_by FileFormatCsv#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.fileExtension"></a>

```csharp
public string FileExtension { get; set; }
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#file_extension FileFormatCsv#file_extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#id FileFormatCsv#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.multiLine"></a>

```csharp
public string MultiLine { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#multi_line FileFormatCsv#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.nullIf"></a>

```csharp
public string[] NullIf { get; set; }
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#null_if FileFormatCsv#null_if}

---

##### `ParseHeader`<sup>Optional</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.parseHeader"></a>

```csharp
public string ParseHeader { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#parse_header FileFormatCsv#parse_header}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.recordDelimiter"></a>

```csharp
public string RecordDelimiter { get; set; }
```

- *Type:* string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#record_delimiter FileFormatCsv#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#replace_invalid_characters FileFormatCsv#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipBlankLines"></a>

```csharp
public string SkipBlankLines { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_blank_lines FileFormatCsv#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_byte_order_mark FileFormatCsv#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.skipHeader"></a>

```csharp
public double SkipHeader { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#skip_header FileFormatCsv#skip_header}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeFormat"></a>

```csharp
public string TimeFormat { get; set; }
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#time_format FileFormatCsv#time_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timeouts"></a>

```csharp
public FileFormatCsvTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timeouts FileFormatCsv#timeouts}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#timestamp_format FileFormatCsv#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvConfig.property.trimSpace"></a>

```csharp
public string TrimSpace { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#trim_space FileFormatCsv#trim_space}

---

### FileFormatCsvDescribeOutput <a name="FileFormatCsvDescribeOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvDescribeOutput {

};
```


### FileFormatCsvShowOutput <a name="FileFormatCsvShowOutput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvShowOutput {

};
```


### FileFormatCsvTimeouts <a name="FileFormatCsvTimeouts" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#create FileFormatCsv#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#read FileFormatCsv#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#update FileFormatCsv#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#create FileFormatCsv#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#delete FileFormatCsv#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#read FileFormatCsv#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_csv#update FileFormatCsv#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatCsvDescribeOutputList <a name="FileFormatCsvDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get"></a>

```csharp
private FileFormatCsvDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatCsvDescribeOutputOutputReference <a name="FileFormatCsvDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape">Escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension">FileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine">MultiLine</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf">NullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader">ParseHeader</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines">SkipBlankLines</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader">SkipHeader</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace">TrimSpace</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8">ValidateUtf8</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.emptyFieldAsNull"></a>

```csharp
public IResolvable EmptyFieldAsNull { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.errorOnColumnCountMismatch"></a>

```csharp
public IResolvable ErrorOnColumnCountMismatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escape"></a>

```csharp
public string Escape { get; }
```

- *Type:* string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.escapeUnenclosedField"></a>

```csharp
public string EscapeUnenclosedField { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fieldOptionallyEnclosedBy"></a>

```csharp
public string FieldOptionallyEnclosedBy { get; }
```

- *Type:* string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.fileExtension"></a>

```csharp
public string FileExtension { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.multiLine"></a>

```csharp
public IResolvable MultiLine { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.nullIf"></a>

```csharp
public string[] NullIf { get; }
```

- *Type:* string[]

---

##### `ParseHeader`<sup>Required</sup> <a name="ParseHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.parseHeader"></a>

```csharp
public IResolvable ParseHeader { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.recordDelimiter"></a>

```csharp
public string RecordDelimiter { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public IResolvable ReplaceInvalidCharacters { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipBlankLines"></a>

```csharp
public IResolvable SkipBlankLines { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```csharp
public IResolvable SkipByteOrderMark { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.skipHeader"></a>

```csharp
public double SkipHeader { get; }
```

- *Type:* double

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.trimSpace"></a>

```csharp
public IResolvable TrimSpace { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidateUtf8`<sup>Required</sup> <a name="ValidateUtf8" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.validateUtf8"></a>

```csharp
public IResolvable ValidateUtf8 { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatCsvDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvDescribeOutput">FileFormatCsvDescribeOutput</a>

---


### FileFormatCsvShowOutputList <a name="FileFormatCsvShowOutputList" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get"></a>

```csharp
private FileFormatCsvShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatCsvShowOutputOutputReference <a name="FileFormatCsvShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions">FormatOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.formatOptions"></a>

```csharp
public string FormatOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatCsvShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvShowOutput">FileFormatCsvShowOutput</a>

---


### FileFormatCsvTimeoutsOutputReference <a name="FileFormatCsvTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatCsvTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FileFormatCsvTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatCsv.FileFormatCsvTimeouts">FileFormatCsvTimeouts</a>

---



