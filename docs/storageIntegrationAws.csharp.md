# `storageIntegrationAws` Submodule <a name="`storageIntegrationAws` Submodule" id="@cdktn/provider-snowflake.storageIntegrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegrationAws <a name="StorageIntegrationAws" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws snowflake_storage_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAws(Construct Scope, string Id, StorageIntegrationAwsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig">StorageIntegrationAwsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig">StorageIntegrationAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsExternalId">ResetStorageAwsExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsObjectAcl">ResetStorageAwsObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageBlockedLocations">ResetStorageBlockedLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetUsePrivatelinkEndpoint">ResetUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageIntegrationAwsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageAwsExternalId` <a name="ResetStorageAwsExternalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsExternalId"></a>

```csharp
private void ResetStorageAwsExternalId()
```

##### `ResetStorageAwsObjectAcl` <a name="ResetStorageAwsObjectAcl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageAwsObjectAcl"></a>

```csharp
private void ResetStorageAwsObjectAcl()
```

##### `ResetStorageBlockedLocations` <a name="ResetStorageBlockedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetStorageBlockedLocations"></a>

```csharp
private void ResetStorageBlockedLocations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsePrivatelinkEndpoint` <a name="ResetUsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.resetUsePrivatelinkEndpoint"></a>

```csharp
private void ResetUsePrivatelinkEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageIntegrationAws resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageIntegrationAws.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageIntegrationAws.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageIntegrationAws.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageIntegrationAws.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageIntegrationAws resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageIntegrationAws to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageIntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageIntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList">StorageIntegrationAwsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList">StorageIntegrationAwsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference">StorageIntegrationAwsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocationsInput">StorageAllowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalIdInput">StorageAwsExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAclInput">StorageAwsObjectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArnInput">StorageAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocationsInput">StorageBlockedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProviderInput">StorageProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpointInput">UsePrivatelinkEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProvider">StorageProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.describeOutput"></a>

```csharp
public StorageIntegrationAwsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList">StorageIntegrationAwsDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.showOutput"></a>

```csharp
public StorageIntegrationAwsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList">StorageIntegrationAwsShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeouts"></a>

```csharp
public StorageIntegrationAwsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference">StorageIntegrationAwsTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StorageAllowedLocationsInput`<sup>Optional</sup> <a name="StorageAllowedLocationsInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocationsInput"></a>

```csharp
public string[] StorageAllowedLocationsInput { get; }
```

- *Type:* string[]

---

##### `StorageAwsExternalIdInput`<sup>Optional</sup> <a name="StorageAwsExternalIdInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalIdInput"></a>

```csharp
public string StorageAwsExternalIdInput { get; }
```

- *Type:* string

---

##### `StorageAwsObjectAclInput`<sup>Optional</sup> <a name="StorageAwsObjectAclInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAclInput"></a>

```csharp
public string StorageAwsObjectAclInput { get; }
```

- *Type:* string

---

##### `StorageAwsRoleArnInput`<sup>Optional</sup> <a name="StorageAwsRoleArnInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArnInput"></a>

```csharp
public string StorageAwsRoleArnInput { get; }
```

- *Type:* string

---

##### `StorageBlockedLocationsInput`<sup>Optional</sup> <a name="StorageBlockedLocationsInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocationsInput"></a>

```csharp
public string[] StorageBlockedLocationsInput { get; }
```

- *Type:* string[]

---

##### `StorageProviderInput`<sup>Optional</sup> <a name="StorageProviderInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProviderInput"></a>

```csharp
public string StorageProviderInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageIntegrationAwsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

---

##### `UsePrivatelinkEndpointInput`<sup>Optional</sup> <a name="UsePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpointInput"></a>

```csharp
public string UsePrivatelinkEndpointInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAllowedLocations"></a>

```csharp
public string[] StorageAllowedLocations { get; }
```

- *Type:* string[]

---

##### `StorageAwsExternalId`<sup>Required</sup> <a name="StorageAwsExternalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsExternalId"></a>

```csharp
public string StorageAwsExternalId { get; }
```

- *Type:* string

---

##### `StorageAwsObjectAcl`<sup>Required</sup> <a name="StorageAwsObjectAcl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsObjectAcl"></a>

```csharp
public string StorageAwsObjectAcl { get; }
```

- *Type:* string

---

##### `StorageAwsRoleArn`<sup>Required</sup> <a name="StorageAwsRoleArn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageAwsRoleArn"></a>

```csharp
public string StorageAwsRoleArn { get; }
```

- *Type:* string

---

##### `StorageBlockedLocations`<sup>Required</sup> <a name="StorageBlockedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageBlockedLocations"></a>

```csharp
public string[] StorageBlockedLocations { get; }
```

- *Type:* string[]

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.storageProvider"></a>

```csharp
public string StorageProvider { get; }
```

- *Type:* string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.usePrivatelinkEndpoint"></a>

```csharp
public string UsePrivatelinkEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAws.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationAwsConfig <a name="StorageIntegrationAwsConfig" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string Name,
    string[] StorageAllowedLocations,
    string StorageAwsRoleArn,
    string StorageProvider,
    string Comment = null,
    string Id = null,
    string StorageAwsExternalId = null,
    string StorageAwsObjectAcl = null,
    string[] StorageBlockedLocations = null,
    StorageIntegrationAwsTimeouts Timeouts = null,
    string UsePrivatelinkEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this storage integration is available for usage in stages. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.name">Name</a></code> | <code>string</code> | String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>string[]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>string</code> | Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageProvider">StorageProvider</a></code> | <code>string</code> | Specifies the storage provider for the integration. Valid options are: `S3` \| `S3GOV` \| `S3CHINA` \| `GCS` \| `AZURE`. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the storage integration. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>string</code> | Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsObjectAcl">StorageAwsObjectAcl</a></code> | <code>string</code> | Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageBlockedLocations">StorageBlockedLocations</a></code> | <code>string[]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this storage integration is available for usage in stages.

`TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#enabled StorageIntegrationAws#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#name StorageIntegrationAws#name}

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAllowedLocations"></a>

```csharp
public string[] StorageAllowedLocations { get; set; }
```

- *Type:* string[]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_allowed_locations StorageIntegrationAws#storage_allowed_locations}

---

##### `StorageAwsRoleArn`<sup>Required</sup> <a name="StorageAwsRoleArn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsRoleArn"></a>

```csharp
public string StorageAwsRoleArn { get; set; }
```

- *Type:* string

Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_aws_role_arn StorageIntegrationAws#storage_aws_role_arn}

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageProvider"></a>

```csharp
public string StorageProvider { get; set; }
```

- *Type:* string

Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_provider StorageIntegrationAws#storage_provider}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the storage integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#comment StorageIntegrationAws#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAwsExternalId`<sup>Optional</sup> <a name="StorageAwsExternalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsExternalId"></a>

```csharp
public string StorageAwsExternalId { get; set; }
```

- *Type:* string

Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_aws_external_id StorageIntegrationAws#storage_aws_external_id}

---

##### `StorageAwsObjectAcl`<sup>Optional</sup> <a name="StorageAwsObjectAcl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageAwsObjectAcl"></a>

```csharp
public string StorageAwsObjectAcl { get; set; }
```

- *Type:* string

Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

`bucket-owner-full-control` is the only currently supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_aws_object_acl StorageIntegrationAws#storage_aws_object_acl}

---

##### `StorageBlockedLocations`<sup>Optional</sup> <a name="StorageBlockedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.storageBlockedLocations"></a>

```csharp
public string[] StorageBlockedLocations { get; set; }
```

- *Type:* string[]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#storage_blocked_locations StorageIntegrationAws#storage_blocked_locations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.timeouts"></a>

```csharp
public StorageIntegrationAwsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#timeouts StorageIntegrationAws#timeouts}

---

##### `UsePrivatelinkEndpoint`<sup>Optional</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsConfig.property.usePrivatelinkEndpoint"></a>

```csharp
public string UsePrivatelinkEndpoint { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#use_privatelink_endpoint StorageIntegrationAws#use_privatelink_endpoint}

---

### StorageIntegrationAwsDescribeOutput <a name="StorageIntegrationAwsDescribeOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsDescribeOutput {

};
```


### StorageIntegrationAwsShowOutput <a name="StorageIntegrationAwsShowOutput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsShowOutput {

};
```


### StorageIntegrationAwsTimeouts <a name="StorageIntegrationAwsTimeouts" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageIntegrationAwsDescribeOutputList <a name="StorageIntegrationAwsDescribeOutputList" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get"></a>

```csharp
private StorageIntegrationAwsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationAwsDescribeOutputOutputReference <a name="StorageIntegrationAwsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.allowedLocations">AllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.blockedLocations">BlockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.iamUserArn">IamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.objectAcl">ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput">StorageIntegrationAwsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedLocations`<sup>Required</sup> <a name="AllowedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.allowedLocations"></a>

```csharp
public string[] AllowedLocations { get; }
```

- *Type:* string[]

---

##### `BlockedLocations`<sup>Required</sup> <a name="BlockedLocations" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.blockedLocations"></a>

```csharp
public string[] BlockedLocations { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IamUserArn`<sup>Required</sup> <a name="IamUserArn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.iamUserArn"></a>

```csharp
public string IamUserArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectAcl`<sup>Required</sup> <a name="ObjectAcl" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.objectAcl"></a>

```csharp
public string ObjectAcl { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```csharp
public IResolvable UsePrivatelinkEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationAwsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsDescribeOutput">StorageIntegrationAwsDescribeOutput</a>

---


### StorageIntegrationAwsShowOutputList <a name="StorageIntegrationAwsShowOutputList" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get"></a>

```csharp
private StorageIntegrationAwsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageIntegrationAwsShowOutputOutputReference <a name="StorageIntegrationAwsShowOutputOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput">StorageIntegrationAwsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutputOutputReference.property.internalValue"></a>

```csharp
public StorageIntegrationAwsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsShowOutput">StorageIntegrationAwsShowOutput</a>

---


### StorageIntegrationAwsTimeoutsOutputReference <a name="StorageIntegrationAwsTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageIntegrationAwsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageIntegrationAwsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageIntegrationAws.StorageIntegrationAwsTimeouts">StorageIntegrationAwsTimeouts</a>

---



