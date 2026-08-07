# `fileFormatJson` Submodule <a name="`fileFormatJson` Submodule" id="@cdktn/provider-snowflake.fileFormatJson"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatJson <a name="FileFormatJson" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json snowflake_file_format_json}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJson(Construct Scope, string Id, FileFormatJsonConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig">FileFormatJsonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts"></a>

```csharp
private void PutTimeouts(FileFormatJsonTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetAllowDuplicate"></a>

```csharp
private void ResetAllowDuplicate()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetBinaryFormat"></a>

```csharp
private void ResetBinaryFormat()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetDateFormat"></a>

```csharp
private void ResetDateFormat()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetEnableOctal"></a>

```csharp
private void ResetEnableOctal()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetFileExtension"></a>

```csharp
private void ResetFileExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetIgnoreUtf8Errors"></a>

```csharp
private void ResetIgnoreUtf8Errors()
```

##### `ResetMultiLine` <a name="ResetMultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetMultiLine"></a>

```csharp
private void ResetMultiLine()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetNullIf"></a>

```csharp
private void ResetNullIf()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetSkipByteOrderMark"></a>

```csharp
private void ResetSkipByteOrderMark()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripNullValues"></a>

```csharp
private void ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetStripOuterArray"></a>

```csharp
private void ResetStripOuterArray()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeFormat"></a>

```csharp
private void ResetTimeFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.resetTrimSpace"></a>

```csharp
private void ResetTrimSpace()
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

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatJson.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatJson.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatJson.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatJson.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FileFormatJson resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileFormatJson to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileFormatJson that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatJson to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput">DateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput">EnableOctalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput">FileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput">MultiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput">NullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput">TimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate">AllowDuplicate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal">EnableOctal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension">FileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine">MultiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf">NullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues">StripNullValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray">StripOuterArray</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace">TrimSpace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.describeOutput"></a>

```csharp
public FileFormatJsonDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList">FileFormatJsonDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.showOutput"></a>

```csharp
public FileFormatJsonShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList">FileFormatJsonShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeouts"></a>

```csharp
public FileFormatJsonTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference">FileFormatJsonTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicateInput"></a>

```csharp
public string AllowDuplicateInput { get; }
```

- *Type:* string

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormatInput"></a>

```csharp
public string BinaryFormatInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormatInput"></a>

```csharp
public string DateFormatInput { get; }
```

- *Type:* string

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctalInput"></a>

```csharp
public string EnableOctalInput { get; }
```

- *Type:* string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtensionInput"></a>

```csharp
public string FileExtensionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8ErrorsInput"></a>

```csharp
public string IgnoreUtf8ErrorsInput { get; }
```

- *Type:* string

---

##### `MultiLineInput`<sup>Optional</sup> <a name="MultiLineInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLineInput"></a>

```csharp
public string MultiLineInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIfInput"></a>

```csharp
public string[] NullIfInput { get; }
```

- *Type:* string[]

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharactersInput"></a>

```csharp
public string ReplaceInvalidCharactersInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMarkInput"></a>

```csharp
public string SkipByteOrderMarkInput { get; }
```

- *Type:* string

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValuesInput"></a>

```csharp
public string StripNullValuesInput { get; }
```

- *Type:* string

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArrayInput"></a>

```csharp
public string StripOuterArrayInput { get; }
```

- *Type:* string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormatInput"></a>

```csharp
public string TimeFormatInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeoutsInput"></a>

```csharp
public IResolvable|FileFormatJsonTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpaceInput"></a>

```csharp
public string TrimSpaceInput { get; }
```

- *Type:* string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.allowDuplicate"></a>

```csharp
public string AllowDuplicate { get; }
```

- *Type:* string

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.enableOctal"></a>

```csharp
public string EnableOctal { get; }
```

- *Type:* string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.fileExtension"></a>

```csharp
public string FileExtension { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.ignoreUtf8Errors"></a>

```csharp
public string IgnoreUtf8Errors { get; }
```

- *Type:* string

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.multiLine"></a>

```csharp
public string MultiLine { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.nullIf"></a>

```csharp
public string[] NullIf { get; }
```

- *Type:* string[]

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; }
```

- *Type:* string

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripNullValues"></a>

```csharp
public string StripNullValues { get; }
```

- *Type:* string

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.stripOuterArray"></a>

```csharp
public string StripOuterArray { get; }
```

- *Type:* string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.trimSpace"></a>

```csharp
public string TrimSpace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJson.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatJsonConfig <a name="FileFormatJsonConfig" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonConfig {
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
    string AllowDuplicate = null,
    string BinaryFormat = null,
    string Comment = null,
    string Compression = null,
    string DateFormat = null,
    string EnableOctal = null,
    string FileExtension = null,
    string Id = null,
    string IgnoreUtf8Errors = null,
    string MultiLine = null,
    string[] NullIf = null,
    string ReplaceInvalidCharacters = null,
    string SkipByteOrderMark = null,
    string StripNullValues = null,
    string StripOuterArray = null,
    string TimeFormat = null,
    FileFormatJsonTimeouts Timeouts = null,
    string TimestampFormat = null,
    string TrimSpace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate">AllowDuplicate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression">Compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat">DateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal">EnableOctal</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension">FileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine">MultiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf">NullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues">StripNullValues</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray">StripOuterArray</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat">TimeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace">TrimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#database FileFormatJson#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#name FileFormatJson#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#schema FileFormatJson#schema}

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.allowDuplicate"></a>

```csharp
public string AllowDuplicate { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#allow_duplicate FileFormatJson#allow_duplicate}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; set; }
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#binary_format FileFormatJson#binary_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#comment FileFormatJson#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#compression FileFormatJson#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.dateFormat"></a>

```csharp
public string DateFormat { get; set; }
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#date_format FileFormatJson#date_format}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.enableOctal"></a>

```csharp
public string EnableOctal { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#enable_octal FileFormatJson#enable_octal}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.fileExtension"></a>

```csharp
public string FileExtension { get; set; }
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#file_extension FileFormatJson#file_extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#id FileFormatJson#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.ignoreUtf8Errors"></a>

```csharp
public string IgnoreUtf8Errors { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#ignore_utf8_errors FileFormatJson#ignore_utf8_errors}

---

##### `MultiLine`<sup>Optional</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.multiLine"></a>

```csharp
public string MultiLine { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#multi_line FileFormatJson#multi_line}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.nullIf"></a>

```csharp
public string[] NullIf { get; set; }
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#null_if FileFormatJson#null_if}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#replace_invalid_characters FileFormatJson#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#skip_byte_order_mark FileFormatJson#skip_byte_order_mark}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripNullValues"></a>

```csharp
public string StripNullValues { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_null_values FileFormatJson#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.stripOuterArray"></a>

```csharp
public string StripOuterArray { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#strip_outer_array FileFormatJson#strip_outer_array}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeFormat"></a>

```csharp
public string TimeFormat { get; set; }
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#time_format FileFormatJson#time_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timeouts"></a>

```csharp
public FileFormatJsonTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timeouts FileFormatJson#timeouts}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#timestamp_format FileFormatJson#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonConfig.property.trimSpace"></a>

```csharp
public string TrimSpace { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#trim_space FileFormatJson#trim_space}

---

### FileFormatJsonDescribeOutput <a name="FileFormatJsonDescribeOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonDescribeOutput {

};
```


### FileFormatJsonShowOutput <a name="FileFormatJsonShowOutput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonShowOutput {

};
```


### FileFormatJsonTimeouts <a name="FileFormatJsonTimeouts" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#create FileFormatJson#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#delete FileFormatJson#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#read FileFormatJson#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/file_format_json#update FileFormatJson#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatJsonDescribeOutputList <a name="FileFormatJsonDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get"></a>

```csharp
private FileFormatJsonDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatJsonDescribeOutputOutputReference <a name="FileFormatJsonDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate">AllowDuplicate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat">BinaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal">EnableOctal</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension">FileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine">MultiLine</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf">NullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues">StripNullValues</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray">StripOuterArray</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace">TrimSpace</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.allowDuplicate"></a>

```csharp
public IResolvable AllowDuplicate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.binaryFormat"></a>

```csharp
public string BinaryFormat { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.enableOctal"></a>

```csharp
public IResolvable EnableOctal { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.fileExtension"></a>

```csharp
public string FileExtension { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```csharp
public IResolvable IgnoreUtf8Errors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MultiLine`<sup>Required</sup> <a name="MultiLine" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.multiLine"></a>

```csharp
public IResolvable MultiLine { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.nullIf"></a>

```csharp
public string[] NullIf { get; }
```

- *Type:* string[]

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public IResolvable ReplaceInvalidCharacters { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```csharp
public IResolvable SkipByteOrderMark { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripNullValues"></a>

```csharp
public IResolvable StripNullValues { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.stripOuterArray"></a>

```csharp
public IResolvable StripOuterArray { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.trimSpace"></a>

```csharp
public IResolvable TrimSpace { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatJsonDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonDescribeOutput">FileFormatJsonDescribeOutput</a>

---


### FileFormatJsonShowOutputList <a name="FileFormatJsonShowOutputList" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get"></a>

```csharp
private FileFormatJsonShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatJsonShowOutputOutputReference <a name="FileFormatJsonShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions">FormatOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.formatOptions"></a>

```csharp
public string FormatOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatJsonShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonShowOutput">FileFormatJsonShowOutput</a>

---


### FileFormatJsonTimeoutsOutputReference <a name="FileFormatJsonTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatJsonTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FileFormatJsonTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatJson.FileFormatJsonTimeouts">FileFormatJsonTimeouts</a>

---



