# `tableStorageLifecyclePolicyAttachment` Submodule <a name="`tableStorageLifecyclePolicyAttachment` Submodule" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableStorageLifecyclePolicyAttachment <a name="TableStorageLifecyclePolicyAttachment" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment snowflake_table_storage_lifecycle_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableStorageLifecyclePolicyAttachment(Construct Scope, string Id, TableStorageLifecyclePolicyAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig">TableStorageLifecyclePolicyAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig">TableStorageLifecyclePolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(TableStorageLifecyclePolicyAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableStorageLifecyclePolicyAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableStorageLifecyclePolicyAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableStorageLifecyclePolicyAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

TableStorageLifecyclePolicyAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TableStorageLifecyclePolicyAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TableStorageLifecyclePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TableStorageLifecyclePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput">OnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput">StorageLifecyclePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput">TableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on">On</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName">StorageLifecyclePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType">TableType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts"></a>

```csharp
public TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput"></a>

```csharp
public string[] OnInput { get; }
```

- *Type:* string[]

---

##### `StorageLifecyclePolicyNameInput`<sup>Optional</sup> <a name="StorageLifecyclePolicyNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput"></a>

```csharp
public string StorageLifecyclePolicyNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput"></a>

```csharp
public string TableTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|TableStorageLifecyclePolicyAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on"></a>

```csharp
public string[] On { get; }
```

- *Type:* string[]

---

##### `StorageLifecyclePolicyName`<sup>Required</sup> <a name="StorageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName"></a>

```csharp
public string StorageLifecyclePolicyName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType"></a>

```csharp
public string TableType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableStorageLifecyclePolicyAttachmentConfig <a name="TableStorageLifecyclePolicyAttachmentConfig" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableStorageLifecyclePolicyAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] On,
    string StorageLifecyclePolicyName,
    string TableName,
    string TableType,
    string Id = null,
    TableStorageLifecyclePolicyAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on">On</a></code> | <code>string[]</code> | List of the columns the storage lifecycle policy applies to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName">StorageLifecyclePolicyName</a></code> | <code>string</code> | Fully qualified name of the storage lifecycle policy to attach to the table. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName">TableName</a></code> | <code>string</code> | Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType">TableType</a></code> | <code>string</code> | Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` \| `DYNAMIC_TABLE`. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on"></a>

```csharp
public string[] On { get; set; }
```

- *Type:* string[]

List of the columns the storage lifecycle policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#on TableStorageLifecyclePolicyAttachment#on}

---

##### `StorageLifecyclePolicyName`<sup>Required</sup> <a name="StorageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName"></a>

```csharp
public string StorageLifecyclePolicyName { get; set; }
```

- *Type:* string

Fully qualified name of the storage lifecycle policy to attach to the table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#storage_lifecycle_policy_name TableStorageLifecyclePolicyAttachment#storage_lifecycle_policy_name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#table_name TableStorageLifecyclePolicyAttachment#table_name}

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType"></a>

```csharp
public string TableType { get; set; }
```

- *Type:* string

Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` | `DYNAMIC_TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#table_type TableStorageLifecyclePolicyAttachment#table_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts"></a>

```csharp
public TableStorageLifecyclePolicyAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#timeouts TableStorageLifecyclePolicyAttachment#timeouts}

---

### TableStorageLifecyclePolicyAttachmentTimeouts <a name="TableStorageLifecyclePolicyAttachmentTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableStorageLifecyclePolicyAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference <a name="TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TableStorageLifecyclePolicyAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---



