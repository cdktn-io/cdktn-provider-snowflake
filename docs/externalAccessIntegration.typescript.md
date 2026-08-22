# `externalAccessIntegration` Submodule <a name="`externalAccessIntegration` Submodule" id="@cdktn/provider-snowflake.externalAccessIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalAccessIntegration <a name="ExternalAccessIntegration" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegration(scope: Construct, id: string, config: ExternalAccessIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations">putAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets">putAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations">resetAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets">resetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedApiAuthenticationIntegrations` <a name="putAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations"></a>

```typescript
public putAllowedApiAuthenticationIntegrations(value: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `putAllowedAuthenticationSecrets` <a name="putAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets"></a>

```typescript
public putAllowedAuthenticationSecrets(value: ExternalAccessIntegrationAllowedAuthenticationSecrets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts"></a>

```typescript
public putTimeouts(value: ExternalAccessIntegrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `resetAllowedApiAuthenticationIntegrations` <a name="resetAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations"></a>

```typescript
public resetAllowedApiAuthenticationIntegrations(): void
```

##### `resetAllowedAuthenticationSecrets` <a name="resetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets"></a>

```typescript
public resetAllowedAuthenticationSecrets(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

externalAccessIntegration.ExternalAccessIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

externalAccessIntegration.ExternalAccessIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

externalAccessIntegration.ExternalAccessIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalAccessIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalAccessIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ExternalAccessIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput">allowedApiAuthenticationIntegrationsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput">allowedAuthenticationSecretsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput">allowedNetworkRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations"></a>

```typescript
public readonly allowedApiAuthenticationIntegrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a>

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput"></a>

```typescript
public readonly describeOutput: ExternalAccessIntegrationDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput"></a>

```typescript
public readonly showOutput: ExternalAccessIntegrationShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts"></a>

```typescript
public readonly timeouts: ExternalAccessIntegrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a>

---

##### `allowedApiAuthenticationIntegrationsInput`<sup>Optional</sup> <a name="allowedApiAuthenticationIntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput"></a>

```typescript
public readonly allowedApiAuthenticationIntegrationsInput: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `allowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="allowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput"></a>

```typescript
public readonly allowedAuthenticationSecretsInput: ExternalAccessIntegrationAllowedAuthenticationSecrets;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `allowedNetworkRulesInput`<sup>Optional</sup> <a name="allowedNetworkRulesInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput"></a>

```typescript
public readonly allowedNetworkRulesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExternalAccessIntegrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules"></a>

```typescript
public readonly allowedNetworkRules: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrations <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationAllowedApiAuthenticationIntegrations: externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations">integrations</a></code> | <code>string[]</code> | Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, no API authentication integrations are allowed. Conflicts with `integrations`. |

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations"></a>

```typescript
public readonly integrations: string[];
```

- *Type:* string[]

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

### ExternalAccessIntegrationAllowedAuthenticationSecrets <a name="ExternalAccessIntegrationAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationAllowedAuthenticationSecrets: externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets">secrets</a></code> | <code>string[]</code> | Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets"></a>

```typescript
public readonly secrets: string[];
```

- *Type:* string[]

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

### ExternalAccessIntegrationConfig <a name="ExternalAccessIntegrationConfig" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationConfig: externalAccessIntegration.ExternalAccessIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>string[]</code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules"></a>

```typescript
public readonly allowedNetworkRules: string[];
```

- *Type:* string[]

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `allowedApiAuthenticationIntegrations`<sup>Optional</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations"></a>

```typescript
public readonly allowedApiAuthenticationIntegrations: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `allowedAuthenticationSecrets`<sup>Optional</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: ExternalAccessIntegrationAllowedAuthenticationSecrets;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExternalAccessIntegrationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

### ExternalAccessIntegrationDescribeOutput <a name="ExternalAccessIntegrationDescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationDescribeOutput: externalAccessIntegration.ExternalAccessIntegrationDescribeOutput = { ... }
```


### ExternalAccessIntegrationShowOutput <a name="ExternalAccessIntegrationShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationShowOutput: externalAccessIntegration.ExternalAccessIntegrationShowOutput = { ... }
```


### ExternalAccessIntegrationTimeouts <a name="ExternalAccessIntegrationTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

const externalAccessIntegrationTimeouts: externalAccessIntegration.ExternalAccessIntegrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations">resetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrations` <a name="resetIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations"></a>

```typescript
public resetIntegrations(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput">integrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput">noneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations">integrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integrationsInput`<sup>Optional</sup> <a name="integrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput"></a>

```typescript
public readonly integrationsInput: string[];
```

- *Type:* string[]

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations"></a>

```typescript
public readonly integrations: string[];
```

- *Type:* string[]

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---


### ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference <a name="ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets"></a>

```typescript
public resetSecrets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput">allInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput">noneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput">secretsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all">all</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none">none</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets">secrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput"></a>

```typescript
public readonly allInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput"></a>

```typescript
public readonly secretsInput: string[];
```

- *Type:* string[]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all"></a>

```typescript
public readonly all: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none"></a>

```typescript
public readonly none: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets"></a>

```typescript
public readonly secrets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalAccessIntegrationAllowedAuthenticationSecrets;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---


### ExternalAccessIntegrationDescribeOutputList <a name="ExternalAccessIntegrationDescribeOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get"></a>

```typescript
public get(index: number): ExternalAccessIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalAccessIntegrationDescribeOutputOutputReference <a name="ExternalAccessIntegrationDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```typescript
public readonly allowedApiAuthenticationIntegrations: string[];
```

- *Type:* string[]

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string[];
```

- *Type:* string[]

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```typescript
public readonly allowedNetworkRules: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalAccessIntegrationDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a>

---


### ExternalAccessIntegrationShowOutputList <a name="ExternalAccessIntegrationShowOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get"></a>

```typescript
public get(index: number): ExternalAccessIntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalAccessIntegrationShowOutputOutputReference <a name="ExternalAccessIntegrationShowOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalAccessIntegrationShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a>

---


### ExternalAccessIntegrationTimeoutsOutputReference <a name="ExternalAccessIntegrationTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { externalAccessIntegration } from '@cdktn/provider-snowflake'

new externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExternalAccessIntegrationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---



