# `fileFormatXml` Submodule <a name="`fileFormatXml` Submodule" id="@cdktn/provider-snowflake.fileFormatXml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatXml <a name="FileFormatXml" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml snowflake_file_format_xml}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXml(Construct Scope, string Id, FileFormatXmlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig">FileFormatXmlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig">FileFormatXmlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetDisableAutoConvert">ResetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetPreserveSpace">ResetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetStripOuterElement">ResetStripOuterElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.putTimeouts"></a>

```csharp
private void PutTimeouts(FileFormatXmlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDisableAutoConvert` <a name="ResetDisableAutoConvert" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetDisableAutoConvert"></a>

```csharp
private void ResetDisableAutoConvert()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetIgnoreUtf8Errors"></a>

```csharp
private void ResetIgnoreUtf8Errors()
```

##### `ResetPreserveSpace` <a name="ResetPreserveSpace" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetPreserveSpace"></a>

```csharp
private void ResetPreserveSpace()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetSkipByteOrderMark"></a>

```csharp
private void ResetSkipByteOrderMark()
```

##### `ResetStripOuterElement` <a name="ResetStripOuterElement" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetStripOuterElement"></a>

```csharp
private void ResetStripOuterElement()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FileFormatXml resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatXml.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatXml.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatXml.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FileFormatXml.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FileFormatXml resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FileFormatXml to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FileFormatXml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatXml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList">FileFormatXmlDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList">FileFormatXmlShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference">FileFormatXmlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.disableAutoConvertInput">DisableAutoConvertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.preserveSpaceInput">PreserveSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.stripOuterElementInput">StripOuterElementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.preserveSpace">PreserveSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.stripOuterElement">StripOuterElement</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.describeOutput"></a>

```csharp
public FileFormatXmlDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList">FileFormatXmlDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.showOutput"></a>

```csharp
public FileFormatXmlShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList">FileFormatXmlShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.timeouts"></a>

```csharp
public FileFormatXmlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference">FileFormatXmlTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DisableAutoConvertInput`<sup>Optional</sup> <a name="DisableAutoConvertInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.disableAutoConvertInput"></a>

```csharp
public string DisableAutoConvertInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.ignoreUtf8ErrorsInput"></a>

```csharp
public string IgnoreUtf8ErrorsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreserveSpaceInput`<sup>Optional</sup> <a name="PreserveSpaceInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.preserveSpaceInput"></a>

```csharp
public string PreserveSpaceInput { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.replaceInvalidCharactersInput"></a>

```csharp
public string ReplaceInvalidCharactersInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.skipByteOrderMarkInput"></a>

```csharp
public string SkipByteOrderMarkInput { get; }
```

- *Type:* string

---

##### `StripOuterElementInput`<sup>Optional</sup> <a name="StripOuterElementInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.stripOuterElementInput"></a>

```csharp
public string StripOuterElementInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.timeoutsInput"></a>

```csharp
public IResolvable|FileFormatXmlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.disableAutoConvert"></a>

```csharp
public string DisableAutoConvert { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.ignoreUtf8Errors"></a>

```csharp
public string IgnoreUtf8Errors { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.preserveSpace"></a>

```csharp
public string PreserveSpace { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; }
```

- *Type:* string

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.stripOuterElement"></a>

```csharp
public string StripOuterElement { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXml.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatXmlConfig <a name="FileFormatXmlConfig" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlConfig {
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
    string Comment = null,
    string Compression = null,
    string DisableAutoConvert = null,
    string Id = null,
    string IgnoreUtf8Errors = null,
    string PreserveSpace = null,
    string ReplaceInvalidCharacters = null,
    string SkipByteOrderMark = null,
    string StripOuterElement = null,
    FileFormatXmlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.compression">Compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#id FileFormatXml#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.preserveSpace">PreserveSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.stripOuterElement">StripOuterElement</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#database FileFormatXml#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#name FileFormatXml#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#schema FileFormatXml#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#comment FileFormatXml#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#compression FileFormatXml#compression}

---

##### `DisableAutoConvert`<sup>Optional</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.disableAutoConvert"></a>

```csharp
public string DisableAutoConvert { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#disable_auto_convert FileFormatXml#disable_auto_convert}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#id FileFormatXml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.ignoreUtf8Errors"></a>

```csharp
public string IgnoreUtf8Errors { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#ignore_utf8_errors FileFormatXml#ignore_utf8_errors}

---

##### `PreserveSpace`<sup>Optional</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.preserveSpace"></a>

```csharp
public string PreserveSpace { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#preserve_space FileFormatXml#preserve_space}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.replaceInvalidCharacters"></a>

```csharp
public string ReplaceInvalidCharacters { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#replace_invalid_characters FileFormatXml#replace_invalid_characters}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.skipByteOrderMark"></a>

```csharp
public string SkipByteOrderMark { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#skip_byte_order_mark FileFormatXml#skip_byte_order_mark}

---

##### `StripOuterElement`<sup>Optional</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.stripOuterElement"></a>

```csharp
public string StripOuterElement { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#strip_outer_element FileFormatXml#strip_outer_element}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlConfig.property.timeouts"></a>

```csharp
public FileFormatXmlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#timeouts FileFormatXml#timeouts}

---

### FileFormatXmlDescribeOutput <a name="FileFormatXmlDescribeOutput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlDescribeOutput {

};
```


### FileFormatXmlShowOutput <a name="FileFormatXmlShowOutput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlShowOutput {

};
```


### FileFormatXmlTimeouts <a name="FileFormatXmlTimeouts" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#create FileFormatXml#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#delete FileFormatXml#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#read FileFormatXml#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#update FileFormatXml#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#create FileFormatXml#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#delete FileFormatXml#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#read FileFormatXml#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_xml#update FileFormatXml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatXmlDescribeOutputList <a name="FileFormatXmlDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.get"></a>

```csharp
private FileFormatXmlDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatXmlDescribeOutputOutputReference <a name="FileFormatXmlDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.preserveSpace">PreserveSpace</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.stripOuterElement">StripOuterElement</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutput">FileFormatXmlDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.disableAutoConvert"></a>

```csharp
public IResolvable DisableAutoConvert { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.ignoreUtf8Errors"></a>

```csharp
public IResolvable IgnoreUtf8Errors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.preserveSpace"></a>

```csharp
public IResolvable PreserveSpace { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public IResolvable ReplaceInvalidCharacters { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.skipByteOrderMark"></a>

```csharp
public IResolvable SkipByteOrderMark { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.stripOuterElement"></a>

```csharp
public IResolvable StripOuterElement { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatXmlDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlDescribeOutput">FileFormatXmlDescribeOutput</a>

---


### FileFormatXmlShowOutputList <a name="FileFormatXmlShowOutputList" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.get"></a>

```csharp
private FileFormatXmlShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FileFormatXmlShowOutputOutputReference <a name="FileFormatXmlShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.formatOptions">FormatOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutput">FileFormatXmlShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.formatOptions"></a>

```csharp
public string FormatOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutputOutputReference.property.internalValue"></a>

```csharp
public FileFormatXmlShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlShowOutput">FileFormatXmlShowOutput</a>

---


### FileFormatXmlTimeoutsOutputReference <a name="FileFormatXmlTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FileFormatXmlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FileFormatXmlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatXml.FileFormatXmlTimeouts">FileFormatXmlTimeouts</a>

---



